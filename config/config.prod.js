var config = require('./config.global')
config.env = 'prod'

config.reporting.service = process.env.REPORTING_URL || 'http://172.29.102.94:9000'
module.exports = config
