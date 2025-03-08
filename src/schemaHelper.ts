// src/schemaHelper.ts
import Joi, { SchemaMap } from "joi";

export function createSchema(schema: SchemaMap) {
  return Joi.object(schema);
}
