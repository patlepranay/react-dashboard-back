import { getDashBoardData } from "../controllers/dashboardController";
import express from "express";


export default (router: express.Router) => {
  router.get("/dashboard", getDashBoardData);
};
