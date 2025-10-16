module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'react/prop-types': 'off'
  }
};
