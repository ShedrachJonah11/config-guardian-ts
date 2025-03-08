#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const config_1 = require("./config");
commander_1.program
    .option("--env <path>", "Path to .env file")
    .option("--json <path>", "Path to JSON config file")
    .option("--yaml <path>", "Path to YAML config file")
    .command("list")
    .description("List all environment variables")
    .action(() => {
    const options = commander_1.program.opts();
    const config = new config_1.ConfigGuardian(options.env, options.json, options.yaml);
    console.log("Loaded Configuration:");
    console.table(config);
});
commander_1.program.parse(process.argv);
