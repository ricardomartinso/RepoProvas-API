import Joi from "joi";
import { CreateTest } from "../types/testTypes";

export const createTestSchema = Joi.object({
  name: Joi.string().required(),
  pdfUrl: Joi.string().uri().required(),
  categoryId: Joi.number().required(),
  teacherDisciplineId: Joi.number().required(),
});
