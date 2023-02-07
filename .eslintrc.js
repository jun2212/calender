module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "react",
    "react-hooks",
    "@react-native-community",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-unused-vars": "warn",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
