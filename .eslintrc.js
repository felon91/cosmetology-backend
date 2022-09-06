// const { GRAPHQL_URL } = require('./config/env');

module.exports = {
  root: true,
  extends: [
    './node_modules/@realtby/codestyle/eslint/prettier',
    './node_modules/@realtby/codestyle/eslint/base',
    './node_modules/@realtby/codestyle/eslint/typescript',
    './node_modules/@realtby/codestyle/eslint/import',
    './node_modules/@realtby/codestyle/eslint/node',
  ],
  rules: {
    // import
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling'],
          'index',
          'object',
          'type',
        ],
        pathGroups: ['components', 'lib', 'features'].map(dir => ({
          pattern: `${dir}/**`,
          group: 'external',
          position: 'after',
        })),
        'newlines-between': 'always',
      },
    ],
  },
  overrides: [
    {
      files: ['./*.{js,ts}', '{pages,pages-archive,@types}/**/*.{ts,tsx}'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
};
