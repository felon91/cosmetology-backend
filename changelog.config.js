const getChangelogConfig = require('@realtby/codestyle/changelog.config');

const scopes = [
  // misc:
  'components', // общие компоненты
  'store',
  'forms',
  'lib',
  'layout',
  'ui',
];

module.exports = getChangelogConfig({ scopes });
