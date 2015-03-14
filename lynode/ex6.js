var filter = require('./ex6-module');

filter(process.argv[2], process.argv[3], function (err, list) {
  list.forEach(function(file) {
    console.log(file);
  });
});
