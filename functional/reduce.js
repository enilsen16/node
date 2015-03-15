function countWords(inputWords) {
  return inputWords.reduce(function (obj, word) {
    obj.hasOwnProperty(word) ? obj[word] += 1 : obj[word] = 1;
    return obj;
  }, {});
}

module.exports = countWords;
