module.exports = {
  '!(cypress|.storybook)/**/*.{js,jsx,ts,tsx}': [
    'prettier --write',
    'eslint --fix --max-warnings=0',
  ],
  // cant use eslint --max-warning=0 because eslintignore has cypress and we cant run eslint in particular dir
  'cypress/**/*.ts': ['prettier --write'],
};
