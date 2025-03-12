# Config Guardian

Config Guardian is a smart configuration manager that simplifies handling environment variables and settings across different environments. It provides validation, helpful error messages, and supports multiple configuration sources such as **.env files, JSON, and YAML**. Designed for reliability and ease of use in modern JavaScript and TypeScript projects.

## Features

- ✅ Supports **.env**, **JSON**, and **YAML** configuration files
- ✅ Schema validation with a simplified, intuitive API (powered by **Joi** behind the scenes)
- ✅ Helpful error messages for missing or invalid configurations
- ✅ CLI support for managing configurations
- ✅ Written in **TypeScript** with full type definitions
- ✅ Supports both **CommonJS** and **ESM** modules
- ✅ JavaScript and TypeScript compatible

## Installation

You can install Config Guardian via npm:

```sh
npm install config-guardian-ts joi
```

Note: `joi` is a peer dependency and must be installed separately.

## Usage

### Import and Initialize

```ts
import ConfigGuardian from "config-guardian-ts";
// or for CommonJS: const ConfigGuardian = require("config-guardian-ts").default;

const config = new ConfigGuardian(".env", "config.json", "config.yaml");
```

### Get Config Values

```ts
const apiKey = config.get("API_KEY");
const port = config.get("PORT", "3000"); // With default value
console.log(apiKey, port);
```

### Validate Config Schema

You can use our simplified schema API (no need to know Joi):

```ts
const schema = {
  API_KEY: { type: 'string', required: true },
  PORT: { type: 'number', default: 3000, min: 1000, max: 9999 },
  DEBUG: { type: 'boolean', default: false },
  LOG_LEVEL: { type: 'string', enum: ['debug', 'info', 'warn', 'error'] }
};

config.validate(schema);
```

Or use Joi directly if you prefer:

```ts
import Joi from "joi";

const schema = {
  API_KEY: Joi.string().required(),
  PORT: Joi.number().default(3000),
};

config.validate(schema);
```

### Get All Config Values

```ts
const allConfig = config.getAll();
console.log(allConfig);
```

## CLI Usage

```sh
npx config-guardian --env .env --json config.json --yaml config.yaml list
```

## Schema Types

Config Guardian provides a simple schema API with the following types:

### String Schema

```ts
{
  type: 'string',
  required?: boolean,
  minLength?: number,
  maxLength?: number,
  pattern?: RegExp,
  email?: boolean,
  uri?: boolean,
  enum?: string[],
  default?: string
}
```

### Number Schema

```ts
{
  type: 'number',
  required?: boolean,
  min?: number,
  max?: number,
  integer?: boolean,
  positive?: boolean,
  negative?: boolean,
  default?: number
}
```

### Boolean Schema

```ts
{
  type: 'boolean',
  required?: boolean,
  default?: boolean
}
```

## Contributing

We welcome contributions! Feel free to open issues or submit pull requests.

## Repository

[GitHub Repo](https://github.com/ShedrachJonah11/config-guardian-ts)

## License

MIT License
