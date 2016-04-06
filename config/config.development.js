var config = require('./config.global')
config.env = 'development'

config.reporting.service = process.env.REPORTING_URL || 'http://172.29.102.94:9100'
module.exports = config
