var jsdom = require('jsdom')

// setup the simplest document possible
var doc = jsdom.jsdom('<!doctype html><html><body></body></html>')

// get the window object out of the document
var win = doc.defaultView

// set globals for mocha that make access to document and window feel 
// natural in the test environment
global.document = doc
global.window = win

