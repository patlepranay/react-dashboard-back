import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import { CronJob } from "cron";
import { Server } from "socket.io";
import router from "./router";
import { getDashBoardData } from "controllers/dashboardController";
import { generateRandomData } from "./util";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.use("/", router());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
  transports: ["websocket", "polling"],
});

io.on("connection", (socket) => {
  // Cron job execution timing documentation: https://www.easycron.com/faq/What-cron-expression-does-easycron-support
  const job = new CronJob("*/5 * * * * *", async () => {
    console.log("job started");
    const data = await generateRandomData();
    socket.emit("dataUpdateEvent", data);
    console.log("job ended:- "+ Date.now() );
  });

  job.start();

  socket.on("disconnect", () => {
    console.log('connection closed')
    job.stop();
  });
});

server.listen(5000, () => console.log(`Listenting to http://localhost:5000`));