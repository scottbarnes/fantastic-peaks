module.exports = {
  plugins: [
    "@typescript-eslint", 
    "prettier",
  ],
  extends: [
    "prettier",
    // "plugin:prettier/recommended",
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "next/core-web-vitals",
  ],
  parserOptions: {
    project: "./tsconfig.json",
    sourceType: "module",
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: "detect"
    }
  }
}
