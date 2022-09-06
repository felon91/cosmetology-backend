const czConfig = require('./changelog.config');

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', czConfig.list],
    'scope-enum': [2, 'always', czConfig.scopes],
  },
};
