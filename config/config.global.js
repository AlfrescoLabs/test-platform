var config = module.exports = {}
/*
 * Default env values that is overriten by development,test and production
 * configuration files. Please ensure that any property added is first added
 * here.
 */

config.hostname = 'localhost',
config.reporting = {}
config.reporting.url = 'http://localhost',
config.reporting.port = ':3000',
config.reporting.service = config.reporting.url + config.reporting.port
