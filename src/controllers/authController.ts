import { Request, Response } from "express";

export async function login(req: Request, res: Response) {
  return res.status(200).send("Hello there");
}