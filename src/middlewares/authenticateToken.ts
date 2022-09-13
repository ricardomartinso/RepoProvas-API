import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export default async function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  try {
    const JWT_SECRET = process.env.SECRET_KEY as string;

    const { userId } = jwt.verify(token, JWT_SECRET) as { userId: number };
    //service que vai buscar usuario e verificar se existe
    res.locals.userId = userId;
  } catch {
    return res.sendStatus(401);
  }

  next();
}
