const assertEqual = require('./assertEquals');
const head = function(arr) {
  if (arr.length > 0) {
    return arr[0];
  }
  return undefined;
};

module.exports = head;