// src/validator.ts
import Joi from "joi";

export function validateConfig(config: Record<string, any>, schema: Record<string, any>) {
  const joiSchema = Joi.object(schema);
  const { error } = joiSchema.validate(config, { abortEarly: false });
  if (error) {
    throw new Error(`Configuration validation error: ${error.message}`);
  }
}