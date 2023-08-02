## Configure 🛠 ESLint and Prettier for a React TypeScript project

#### Import your config into your React Apps
```bash
npm i --dev @rhannachi/eslint-config-prettier
```

Add `@rhannachi/eslint-config-prettier` to the extends in your .eslintrc file:
```json
{
  "extends": [
    "@rhannachi/eslint-config-prettier"
  ]
}
```
Extend your current config file tsconfig.json:
```json
{
  "extends": "@rhannachi/eslint-config-prettier/tsconfig.json"
}
```
Scripts:
```json
{
  "scripts": {
    "lint": "eslint . --ext .ts,.tsx",
    "lint:fix": "eslint . --fix --ext .ts,.tsx"
  }
}
```

