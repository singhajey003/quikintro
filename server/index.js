var express = require('express');
var app     = module.exports = express();
var args    = process.argv;
var env     = process.env.NODE_ENV || 'development';

app.set('port', process.env.PORT || 3000);

app.use('/',express.static(__dirname + '../'));