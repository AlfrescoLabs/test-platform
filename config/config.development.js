var config = require('./config.global')
config.env = 'development'
config.reporting = {}
config.reporting.url = 'http://localhost',
config.reporting.port = ':3000',
config.reporting.service = config.reporting.url + config.reporting.port

module.exports = config
