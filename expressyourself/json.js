var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

app.get('/books', function(req, res) {
  fs.readFile(process.argv[3], function(err, data) {
    if (err) throw err;
    var object = JSON.parse(data);
    res.json(object);
  });
});

app.listen(process.argv[2]);
