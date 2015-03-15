var express = require('express');
var path = require('path');
var app = express();

app.get('/search', function(req, res) {
  var params = req.query;
  res.send(params );
});

app.listen(process.argv[2]);
