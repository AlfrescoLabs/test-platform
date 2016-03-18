var env = process.env.NODE_ENV || 'development'

switch (env) {
  case 'development':
  case 'test':
  case 'prod':
    config = require('./config.' + env);
    break;
  default:
    config = require('./config.global');
}

module.exports = config;

console.log('Running in '+ env +' mode\nConnecting to ' + config.reporting.service + ' backend');
