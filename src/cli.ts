#!/usr/bin/env node
import { program } from "commander";
import { ConfigGuardian } from "./config";

program
  .option("--env <path>", "Path to .env file")
  .option("--json <path>", "Path to JSON config file")
  .option("--yaml <path>", "Path to YAML config file")
  .command("list")
  .description("List all environment variables")
  .action(() => {
    const options = program.opts();
    const config = new ConfigGuardian(options.env, options.json, options.yaml);

    console.log("Loaded Configuration:");
    console.table(config);
  });

program.parse(process.argv);
