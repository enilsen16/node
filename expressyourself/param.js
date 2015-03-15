var express = require('express');
var path = require('path');
var app = express();

app.put('/message/:id', function(req, res) {
  var id = req.params.id;
  res.send(require('crypto')
  .createHash('sha1')
  .update(new Date().toDateString() + id)
  .digest('hex'));
});

app.listen(process.argv[2]);
