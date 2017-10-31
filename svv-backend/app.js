var express = require('express');
var path = require('path');
var jsonServer = require('json-server');
var http = require('http');
var index = require('./routes/index');
var hc = require('./routes/hc');
var port = 9999;
var app = express();


// app.use('/', index);
app.use(express.static('public'));
app.use('/hc', hc);
app.use(function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

function noCache(req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
}

var server = http.createServer(app);
server.listen(port, function() {
  console.log("Server started on port " + port);
});


module.exports = app;
