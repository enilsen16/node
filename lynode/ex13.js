var http = require('http');
var url = require('url');

var routes = {
  "/api/parsetime": function(parsedUrl) {
    date = new Date(parsedUrl.query.iso);
    return {
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()
    };
  },
  "/api/unixtime": function(parsedUrl) {
    return {
      unixtime: new Date(parsedUrl.query.iso).getTime(),
    };
  }
};

var server = http.createServer(function (request, response) {
  parsedUrl = url.parse(request.url, true);
  resource = routes[parsedUrl.pathname];

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify(resource(parsedUrl)));
});
server.listen(process.argv[2]);
