module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard',
    'eslint-config-prettier',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-uses-react': 1,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
