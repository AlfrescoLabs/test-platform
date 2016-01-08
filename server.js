var react  = require('react')                           // React view
var express = require('express')                        // Web framework
var bodyParser = require('body-parser')                 // Pulls information from HTML post
var path = require('path');                             // System path
// var routes = require('./routes/main')                   // Application routes
// var router = require('react-router')                    // React router
var app = express()
app.set('view engine', 'html')
app.use(bodyParser.urlencoded({'extended': 'true'}))    // parse application/x-www-form-urlencoded
app.use(bodyParser.json())                              // parse application/json
app.use('/', express.static(path.join(__dirname, 'src/client/public'))); // Include static assets. Not advised for production

app.listen(3000)
module.exports = app
