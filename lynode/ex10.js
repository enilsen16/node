var net = require('net');

var zero = function(n) {  return n < 10 ? ('0' + n) : n; };

var printDate = function() {
  var date = new Date();
  var year = date.getFullYear();
  var month = zero(date.getMonth() + 1);
  var day = zero(date.getDate());
  var hour = zero(date.getHours());
  var minutes = zero(date.getMinutes());

  var timeStamp = year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + '\n';
  return timeStamp;
};

var server = net.createServer(function callback(socket) {
  socket.end(printDate());
});

server.listen(process.argv[2]);
