var http = require('http');
var map = require('through2-map');

var upperCase = map(function(data) {
  return data.toString().toUpperCase();
});

var server = http.createServer(function (request, response) {
  if (request.method === 'POST') {
    request.pipe(upperCase).pipe(response);
  }
});

server.listen(process.argv[2]);
