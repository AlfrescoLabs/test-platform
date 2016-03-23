var config = require('./config.global')
config.env = 'development'
config.reporting.service = process.env.REPORTING_URL || 'http://192.168.99.101:3000'
module.exports = config
