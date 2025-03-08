"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateConfig = validateConfig;
// src/validator.ts
const joi_1 = __importDefault(require("joi"));
function validateConfig(config, schema) {
    const joiSchema = joi_1.default.object(schema);
    const { error } = joiSchema.validate(config, { abortEarly: false });
    if (error) {
        throw new Error(`Configuration validation error:\n${error.details
            .map((d) => d.message)
            .join("\n")}`);
    }
}
