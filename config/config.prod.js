var config = require('./config.global')
config.env = 'prod'
config.hostname = process.env.NODE_HOST
config.reporting.service = 'url goes here'
module.exports = config
