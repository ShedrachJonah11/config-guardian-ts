// src/validator.ts
import Joi, { SchemaMap } from "joi";

export function validateConfig(
  config: Record<string, string>,
  schema: SchemaMap
) {
  const joiSchema = Joi.object(schema);
  const { error } = joiSchema.validate(config, { abortEarly: false });
  if (error) {
    throw new Error(
      `Configuration validation error:\n${error.details
        .map((d) => d.message)
        .join("\n")}`
    );
  }
}
