const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const eqArrays = function(first, second) {
  let isEqual = true;
  if (first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return isEqual;
};

const results1 = map(words, word => word[0]);
const newWords = ["cool", "I", "Accidently", "skipped", "ahead"];
const results2 = map(newWords, word => word[0]);
const diffWords = [];
const results3 = map(diffWords, word => word[0]);
console.log(results1);
assertEqual(eqArrays(results1, [ 'g', 'c', 't', 'm', 't' ]), true);

assertEqual(eqArrays(results2, ['c', 'I', 'A', 's', 'a']), true);
assertEqual(eqArrays(results3, []), true);

module.exports = map;