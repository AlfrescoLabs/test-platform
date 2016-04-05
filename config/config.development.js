var config = require('./config.global')
config.env = 'development'

config.reporting.service = process.env.REPORTING_URL || 'http://172.29.102.94:80'
module.exports = config
