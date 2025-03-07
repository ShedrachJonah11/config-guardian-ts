// src/config.ts
import dotenv from "dotenv";
import path from "path";
import { validateConfig } from "./validator";

dotenv.config();

export class ConfigGuardian {
  private config: Record<string, string | undefined>;

  constructor(envPath: string = "") {
    dotenv.config({ path: envPath || path.resolve(process.cwd(), ".env") });
    this.config = process.env;
  }

  get(key: string, defaultValue?: string): string {
    const value = this.config[key];
    if (value === undefined && defaultValue === undefined) {
      throw new Error(`Missing required configuration key: ${key}`);
    }
    return value || defaultValue || "";
  }

  validate(schema: Record<string, any>) {
    validateConfig(this.config, schema);
  }
}