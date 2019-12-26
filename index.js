module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["react", "jsx-a11y", "import", "@typescript-eslint", "prettier"],
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  env: {
    browser: true,
    es6: true
  },
  rules: {
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": ["error", { extensions: [".tsx", ".jsx"] }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        mjs: "never",
        jsx: "never",
        ts: "never",
        tsx: "never"
      }
    ]
  }
};
