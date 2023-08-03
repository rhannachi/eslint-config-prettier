## Configure 🛠 ESLint and Prettier for a React/Next.js TypeScript project

```bash
npm i --dev @rhannachi/eslint-config-prettier
```

* If you are using **React** add `@rhannachi/eslint-config-prettier` to the extends in your .eslintrc file:
```json
{
  "extends": [
    "@rhannachi/eslint-config-prettier"
  ]
}
```

* If you are using **Next.js** add `@rhannachi/eslint-config-prettier/next` to the extends in your .eslintrc file:
```json
{
  "extends": [
    "@rhannachi/eslint-config-prettier/next"
  ]
}
```

Extend your current config file tsconfig.json:
```json
{
  "extends": "@rhannachi/eslint-config-prettier/tsconfig.json"
}
```

* If you are using **React**:
```json
{
  "scripts": {
    "lint": "eslint . --ext .ts,.tsx",
    "lint:fix": "eslint . --fix --ext .ts,.tsx"
  }
}
```

* If you are using **Next.js**:
```json
{
  "scripts": {
    "lint": "next lint . --ext .ts,.tsx",
    "lint:fix": "next lint . --fix --ext .ts,.tsx"
  }
}
```

