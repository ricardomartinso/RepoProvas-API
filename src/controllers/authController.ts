import { Request, Response } from "express";
import { createUser } from "../services/authServices";
import { CreateUser } from "../types/authTypes";

export async function signUp(req: Request, res: Response) {
  const { email, password }: CreateUser = req.body;

  await createUser({ email, password });

  return res.status(201).send("Created");
}

export async function login(req: Request, res: Response) {
  return res.status(200).send("{token}");
}
