var config = require('./config.global')
config.env = 'prod'

config.reporting.host = process.env.REPORTING_HOST || 'localhost',
config.reporting.port = process.env.REPORTING_PORT || '3000',
config.reporting.service = process.env.REPORTING_URL || 'http://' + config.reporting.host + ':' + config.reporting.port
module.exports = config
