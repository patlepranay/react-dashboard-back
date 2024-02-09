import express from "express";
import { generateRandomData } from "../util";

export const getDashBoardData = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const data = generateRandomData();
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
