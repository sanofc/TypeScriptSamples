// local as not required for build
var express = require('express')
var app = express()
app.use(express.static('dist', {'index': 'index.html'}))
app.listen(8080);
