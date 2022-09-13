import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

export function validateSchemaMiddleware(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body, { abortEarly: false });

    if (validation.error) {
      if (
        validation.error.message === '"confirmPassword" must be [ref:password]'
      ) {
        return res.status(422).send({ error: "Passwords must match!" });
      }
      return res.status(422).send({ error: validation.error.message });
    }

    next();
  };
}
