const rewireESLint = require('react-app-rewire-eslint');

module.exports = function override(config, env) {
  config = rewireESLint(config, env);
  return config;
};
