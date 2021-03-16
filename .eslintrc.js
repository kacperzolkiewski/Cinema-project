module.exports = {
  root: true,
  extends: ["eslint:recommended", "plugin:@typescript-eslint/eslint-recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  env: {
    es6: true,
    jest: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "import"],
  rules: {
    "import/order": [
      "error",
      {
        "newlines-between": "never",
        alphabetize: {
          order: "asc"
        }
      }
    ],
    "arrow-spacing": "error",
    "no-console": "warn",
    "no-fallthrough": "off",
    "no-multi-assign": "error",
    "no-use-before-define": "off",
    "no-param-reassign": "error",
    "prefer-spread": "error",
    semi: ["error", "never"],
    quotes: ["error", "double"],
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true
      }
    ],
    "@typescript-eslint/no-use-before-define": ["error"]
  }
}
