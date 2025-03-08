# Config Guardian

**Config Guardian** is a smart configuration manager designed to simplify handling environment variables and settings across different environments. It provides validation, helpful error messages, and supports multiple configuration sources such as `.env` files, JSON, and command-line arguments.

## Features

- ✅ **Environment Variable Management** - Load and validate environment variables effortlessly.
- 🔄 **Multiple Configuration Sources** - Supports `.env` files, JSON, and command-line arguments.
- 🔍 **Schema Validation** - Uses Joi to ensure correct configuration values.
- 📢 **Clear Error Messages** - Provides helpful error messages for missing or invalid configurations.
- 🚀 **TypeScript Support** - Built with TypeScript for type safety and scalability.
- 🌎 **Cross-Platform Compatibility** - Works on Windows, macOS, and Linux.

## Installation

Install Config Guardian via npm:

```sh
npm install @/config-guardian
```

or via yarn:

```sh
yarn add @/config-guardian
```

## Usage

### 1️⃣ Basic Setup

Create a `.env` file:

```env
PORT=3000
DATABASE_URL=mongodb://localhost:27017/mydb
```

Use Config Guardian in your project:

```ts
import { ConfigGuardian } from '@/config-guardian';
import Joi from 'joi';

const schema = Joi.object({
  PORT: Joi.number().default(3000),
  DATABASE_URL: Joi.string().uri().required(),
});

const config = new ConfigGuardian('./.env'); // Pass config file path
console.log(config.get('PORT')); // 3000
console.log(config.get('DATABASE_URL')); // mongodb://localhost:27017/mydb
```

### 2️⃣ Load from JSON

```ts
const config = new ConfigGuardian(schema, {
  source: 'json',
  filePath: './config.json',
});
```

## Scripts

```sh
npm run build    # Compile TypeScript
npm run dev      # Run in development mode
npm run test     # Run tests with Jest
npm start        # Run compiled JavaScript
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-branch`
3. Commit changes: `git commit -m "Add feature"`
4. Push to GitHub: `git push origin feature-branch`
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

📧 **Shedrach Jonah** – [GitHub](https://github.com/ShedrachJonah11)

---

⭐ **If you find this useful, give it a star on GitHub!** 🚀

