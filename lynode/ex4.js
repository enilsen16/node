var fs = require('fs');

var file = fs.readFile(process.argv[2], 'utf8', function(err, data) {
  if (err) throw err;
  var str = data.split("\n");
  console.log(str.length - 1);
});
