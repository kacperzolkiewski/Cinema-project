module.exports = {
    extends: ["react-app", "react-app/jest", "prettier"],
    rules: {
      "import/order": [
        "warn",
        {
          "newlines-between": "never",
          alphabetize: {
            order: "asc"
          }
        }
      ],
      semi: ["error", "never"],
      quotes: ["error", "double"],
    }
  };
  