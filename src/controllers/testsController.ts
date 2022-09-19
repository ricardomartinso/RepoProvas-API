import { Request, Response } from "express";
import * as testsService from "../services/testsServices";
import { CreateTest } from "../types/testTypes";

export async function testsCreate(req: Request, res: Response) {
  const test: CreateTest = req.body;
  const userId: number = res.locals.userData.id;

  const created = await testsService.createTest(test, userId);

  res.status(201).send(created);
}

export async function getTestsByDiscipline(req: Request, res: Response) {
  const tests = await testsService.getTestsByDiscipline();

  res.status(200).send(tests);
}

export async function getTestsByTeachers(req: Request, res: Response) {
  const tests = await testsService.getTestsByTeachers();

  res.status(200).send(tests);
}
