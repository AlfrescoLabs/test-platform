var react  = require('react')                           // React view
var express = require('express')                        // Web framework
var bodyParser = require('body-parser')                 // Pulls information from HTML post
var path = require('path');                             // System path
// var routes = require('./routes/main')
var app = express()

// Allow direct use of '.jsx' files.
// require('node-jsx').install({extension: '.jsx'});

app.set('view engine', 'html')
app.use(bodyParser.urlencoded({'extended': 'true'}))    // parse application/x-www-form-urlencoded
app.use(bodyParser.json())                              // parse application/json
app.use('/', express.static(path.join(__dirname, '../public'))); // Include static assets. Not advised for production
// serve our static stuff like index.css
app.use(express.static(__dirname))

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})
app.listen(3000)
module.exports = app
