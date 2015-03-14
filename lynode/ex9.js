var http = require('http');
var concatStream = require('concat-stream');

http.get(process.argv[2], function callback(response) {
  response.setEncoding('utf8');
  response.pipe(concatStream(function (data) {
    console.log(data.toString());
    http.get(process.argv[3], function callback(response) {
      response.setEncoding('utf8');
      response.pipe(concatStream(function (data) {
        console.log(data.toString());
        http.get(process.argv[4], function callback(response) {
          response.setEncoding('utf8');
          response.pipe(concatStream(function (data) {
            console.log(data.toString());
          }));
        });
      }));
    });
  }));
});
