// include the Lo-Dash library
var _ = require("lodash");

var worker = function(array) {
  return _.where(array, {active: true});
};


module.exports = worker;
