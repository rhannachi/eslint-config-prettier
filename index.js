require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:react/jsx-runtime"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    rules: {
        "react/react-in-jsx-scope": "off",
        camelcase: "error",
        "spaced-comment": "error",
        quotes: ["error", "single"],
        "no-duplicate-imports": "error",
        "prettier/prettier": [
            "error", {
                semi: false,
                tabWidth: 2,
                printWidth: 100,
                singleQuote: true,
                trailingComma: "all",
                jsxSingleQuote: true,
                bracketSpacing: true
            }
        ]
    },
    settings: {
        "import/resolver": {
            "typescript": {}
        },
        react: {
            "version": "detect"
        }
    }
}

