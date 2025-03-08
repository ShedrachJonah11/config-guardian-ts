"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSchema = createSchema;
// src/schemaHelper.ts
const joi_1 = __importDefault(require("joi"));
function createSchema(schema) {
    return joi_1.default.object(schema);
}
