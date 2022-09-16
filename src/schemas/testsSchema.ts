import Joi from "joi";

export const createTestSchema = Joi.object({
  name: Joi.string().required(),
  pdfUrl: Joi.string().uri().required(),
  categoryId: Joi.number().required(),
  teachersDisciplineId: Joi.number().required(),
});
