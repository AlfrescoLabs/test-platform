var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'react']
                },
                include : APP_DIR,
                loader : 'babel'
            }
        ]
    }
};

config.reporting.service = process.env.REPORTING_URL || 'test'

module.exports = config;
