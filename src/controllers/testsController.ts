import { Request, Response } from "express";
import { createTest } from "../services/testsServices";
import { CreateTest } from "../types/testTypes";

export async function testsCreate(req: Request, res: Response) {
  const test: CreateTest = req.body;
  const userId: number = res.locals.userData.id;

  const created = await createTest(test, userId);

  res.status(201).send(created);
}

export async function getTestsByDiscipline(req: Request, res: Response) {
  res.status(200).send("tests");
}
