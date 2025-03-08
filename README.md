# Config Guardian

Config Guardian is a smart configuration manager that simplifies handling environment variables and settings across different environments. It provides validation, helpful error messages, and supports multiple configuration sources such as **.env files, JSON, and YAML**. Designed for reliability and ease of use in modern JavaScript and TypeScript projects.

## Features
- ✅ Supports **.env**, **JSON**, and **YAML** configuration files
- ✅ Schema validation using **Joi**
- ✅ Helpful error messages for missing or invalid configurations
- ✅ CLI support for managing configurations
- ✅ Written in **TypeScript** for type safety

## Installation

You can install Config Guardian via npm:

```sh
npm install config-guardian-ts
```

## Usage

### Import and Initialize

```ts
import { ConfigGuardian } from "config-guardian-ts";

const config = new ConfigGuardian(".env", "config.json", "config.yaml");
```

### Get Config Values

```ts
const apiKey = config.get("API_KEY");
console.log(apiKey);
```

### Validate Config Schema

```ts
import Joi from "joi";

const schema = {
  API_KEY: Joi.string().required(),
  PORT: Joi.number().default(3000),
};

config.validate(schema);
```

## CLI Usage

```sh
npx config-guardian --env .env --json config.json --yaml config.yaml list
```

## Contributing

We welcome contributions! Feel free to open issues or submit pull requests.

## Repository
[GitHub Repo](https://github.com/ShedrachJonah11/config-guardian-ts)

## License

MIT License

