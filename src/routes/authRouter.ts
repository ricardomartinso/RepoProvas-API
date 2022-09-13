import { Router } from "express";
import { login, signUp } from "../controllers/authController";
import authenticateToken from "../middlewares/authenticateToken";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware";
import { authSchema } from "../schemas/authSchema";

const authRouter = Router();

authRouter.post("/sign-up", validateSchemaMiddleware(authSchema), signUp);
authRouter.post(
  "/log-in",
  validateSchemaMiddleware(authSchema),
  authenticateToken,
  login
);

export default authRouter;
