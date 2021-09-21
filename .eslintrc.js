module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es2021: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    plugins: [
        "react",
        "prettier"
    ],
    rules: {
        semi: [2, "never"],
        "prettier/prettier": ["error", {
            semi: false,
            singleQuote: true
        }],
        "no-unused-vars": "warn",
        "no-console": "off",
    }
}
