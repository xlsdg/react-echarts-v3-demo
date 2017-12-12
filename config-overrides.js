const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  const orig = config.module.rules[1].oneOf[1].include;
  config.module.rules[1].oneOf[1].include = [orig, resolve('node_modules/react-echarts-v3/src')];
  return config;
}