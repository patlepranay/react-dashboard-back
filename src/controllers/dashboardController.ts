import express from "express";
import { generateRandomData } from "../util/util";
import 'dotenv/config'

export const getDashBoardData = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const data = generateRandomData(Number(process.env.COMPANY_LENGTH));
    return res.status(200).json(data);
  } catch (error) {
   
    return res.sendStatus(400);
  }
};
