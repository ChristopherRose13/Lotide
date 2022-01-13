const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i ++) {
    let letter = sentence[i];
    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }
  return results;
};

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
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

const sentence = "banana";
console.log(letterPositions(sentence));
assertArraysEqual(letterPositions("hello").e, [1]);