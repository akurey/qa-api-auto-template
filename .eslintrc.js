module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    overrides: [
      {
        files: '*.{js,ts}',
        rules: { '@typescript-eslint/no-var-requires': 'off' },
      },
    ],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
    },
  };