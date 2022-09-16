import { Request, Response } from "express";
import { createTest } from "../services/testsServices";
import { CreateTest } from "../types/testTypes";

export async function testsCreate(req: Request, res: Response) {
  const test: CreateTest = req.body;

  await createTest(test);

  return res.status(201).send("created");
}
