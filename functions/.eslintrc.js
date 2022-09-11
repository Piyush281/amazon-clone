export default {
  "root": true,
  "env": {
    es6: true,
    node: true,
  },
  "parser": "@babel/eslint-parser",
  "extends": [
    "eslint:recommended",
    "google",
  ],
  "rules": {
    quotes: ["error", "double"],
  },
};
