module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  env: {
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      arrowFunctions: true,
    },
  },
  plugins: ["@typescript-eslint"],
  rules: {
    quotes: ["error", "double"],
    "@typescript-eslint/explicit-function-return-type": [
      "warn",
      {
        allowExpressions: true,
      },
    ],
  },
};
