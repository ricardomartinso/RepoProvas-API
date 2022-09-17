import { Router } from "express";
import { testsCreate } from "../controllers/testsController";

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

export default testsRouter;
