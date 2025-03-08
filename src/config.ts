import dotenv from "dotenv";
import fs from "fs";
import YAML from "yaml";
import { validateConfig } from "./validator";

export class ConfigGuardian {
  private config: Record<string, string>;

  constructor(envPath: string = "", jsonPath: string = "", yamlPath: string = "") {
    dotenv.config({ path: envPath });

    // Convert process.env values to ensure they are all strings
    const envConfig: Record<string, string> = Object.fromEntries(
      Object.entries(process.env).map(([key, value]) => [key, value ?? ""])
    );

    let jsonConfig: Record<string, string> = {};
    if (jsonPath && fs.existsSync(jsonPath)) {
      jsonConfig = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
    }

    let yamlConfig: Record<string, string> = {};
    if (yamlPath && fs.existsSync(yamlPath)) {
      const yamlFile = fs.readFileSync(yamlPath, "utf-8");
      yamlConfig = YAML.parse(yamlFile);
    }

    // Merge configurations with priority: ENV > JSON > YAML
    this.config = { ...yamlConfig, ...jsonConfig, ...envConfig };
  }

  get(key: string, defaultValue?: string): string {
    const value = this.config[key];
    if (value === undefined) {
      if (defaultValue === undefined) {
        throw new Error(`Missing required configuration key: ${key}`);
      }
      return defaultValue;
    }
    return value;
  }

  validate(schema: Record<string, any>) {
    validateConfig(this.config, schema);
  }
}
