import { Request, Response } from "express";
import { createUser, loginUser } from "../services/authServices";
import { AuthUser } from "../types/authTypes";

export async function signUp(req: Request, res: Response) {
  const { email, password }: AuthUser = req.body;

  const user = await createUser({ email, password });

  return res.status(201).send(user);
}

export async function login(req: Request, res: Response) {
  const user: AuthUser = req.body;

  const token = await loginUser(user);

  return res.status(200).send({ token });
}
