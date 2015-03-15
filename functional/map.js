function doubleAll(numbers) {

  var results = numbers.map( function(n) {
    return n * 2;
  });
  return results;
}

module.exports = doubleAll;
