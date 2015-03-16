var _ = require('lodash');

var worker = function(array) {
  return _.sortBy(array, 'quantity').reverse();
};

module.exports = worker;
