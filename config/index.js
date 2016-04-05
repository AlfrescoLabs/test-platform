const env = process.env.NODE_ENV || 'development'

switch (env) {
  case 'development':
  // case 'test':
  // case 'prod':
    config = require('./config.' + env);
    break;
}

module.exports = config;
