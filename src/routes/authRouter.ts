import { Router } from "express";
import { login } from "../controllers/authController";

const authRouter = Router();

authRouter.get("/hello", login);
authRouter.post("/sign-up");
authRouter.post("/log-in", login);

export default authRouter;
