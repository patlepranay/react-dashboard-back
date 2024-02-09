import express from "express";
import dashboard from "./dashboard";

const router = express.Router();

export default (): express.Router => {
  dashboard(router);
  return router;
};
