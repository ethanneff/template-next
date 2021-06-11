module.exports = {
  env: {browser: true, es2021: true},
  extends: [
    'plugin:react/all',
    'plugin:jest/all',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {jsx: true},
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {react: {version: 'detect'}},
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    // Added
    'react/function-component-definition': [
      'error',
      {namedComponents: 'arrow-function', unnamedComponents: 'arrow-function'},
    ],
    'react-hooks/exhaustive-deps': ['error'],
    'import/no-cycle': 'error',
    'import/no-unresolved': ['error', {ignore: ['root-types']}],
    // Ignored (NextJS)
    'react/react-in-jsx-scope': 'off',
    // Ignored (outside prettier and typescript rules)
    'react/require-default-props': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-no-literals': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-newline': 'off',
    'react/jsx-max-depth': 'off',
  },
  ignorePatterns: [
    'coverage/',
    'out/',
    '.next/',
    '*.config.js',
    '.eslintrc.js',
  ],
};
