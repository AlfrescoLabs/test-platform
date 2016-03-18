var config = module.exports = {}
/*
 * Default env values that is overriten by development,test and production
 * configuration files. Please ensure that any property added is first added
 * here.
 */

config.hostname = 'localhost',
config.reporting = {}
config.reporting.host = process.env.REPORTING_HOST || 'localhost',
config.reporting.port = process.env.REPORTING_PORT || '3000',
config.reporting.service = process.env.REPORTING_URL || 'http://' + config.reporting.host + ':' + config.reporting.port
