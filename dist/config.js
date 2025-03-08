"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigGuardian = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
const yaml_1 = __importDefault(require("yaml"));
const validator_1 = require("./validator");
class ConfigGuardian {
    constructor(envPath = "", jsonPath = "", yamlPath = "") {
        dotenv_1.default.config({ path: envPath });
        // Convert process.env values to ensure they are all strings
        const envConfig = Object.fromEntries(Object.entries(process.env).map(([key, value]) => [key, value !== null && value !== void 0 ? value : ""]));
        let jsonConfig = {};
        if (jsonPath && fs_1.default.existsSync(jsonPath)) {
            jsonConfig = JSON.parse(fs_1.default.readFileSync(jsonPath, "utf-8"));
        }
        let yamlConfig = {};
        if (yamlPath && fs_1.default.existsSync(yamlPath)) {
            const yamlFile = fs_1.default.readFileSync(yamlPath, "utf-8");
            yamlConfig = yaml_1.default.parse(yamlFile);
        }
        // Merge configurations with priority: ENV > JSON > YAML
        this.config = Object.assign(Object.assign(Object.assign({}, yamlConfig), jsonConfig), envConfig);
    }
    get(key, defaultValue) {
        const value = this.config[key];
        if (value === undefined) {
            if (defaultValue === undefined) {
                throw new Error(`Missing required configuration key: ${key}`);
            }
            return defaultValue;
        }
        return value;
    }
    validate(schema) {
        (0, validator_1.validateConfig)(this.config, schema);
    }
}
exports.ConfigGuardian = ConfigGuardian;
