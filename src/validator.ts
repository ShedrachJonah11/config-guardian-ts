// src/validator.ts
import Joi, { SchemaMap } from "joi";
import { createSchema } from "./schemaHelper";

export function validateConfig(
  config: Record<string, string>,
  schema: SchemaMap
) {
  const joiSchema = createSchema(schema);
  const { error } = joiSchema.validate(config, { abortEarly: false });
  if (error) {
    throw new Error(
      `Configuration validation error:\n${error.details
        .map((d) => d.message)
        .join("\n")}`
    );
  }
}