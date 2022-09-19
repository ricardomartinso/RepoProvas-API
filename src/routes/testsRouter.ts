import { Router } from "express";
import {
  getTestsByDiscipline,
  getTestsByTeachers,
  testsCreate,
} from "../controllers/testsController";

import authenticateToken from "../middlewares/authenticateToken";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware";
import { createTestSchema } from "../schemas/testsSchema";

const testsRouter = Router();

testsRouter.post(
  "/tests",
  authenticateToken,
  validateSchemaMiddleware(createTestSchema),
  testsCreate
);

testsRouter.get("/tests/disciplines", authenticateToken, getTestsByDiscipline);

testsRouter.get("/tests/teachers", authenticateToken, getTestsByTeachers);

export default testsRouter;
