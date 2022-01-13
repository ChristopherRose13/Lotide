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

const middle = function(array) {
  let output = [];

  if (array.length <= 2) {
    return output;
  } else if (array.length % 2 === 0) {
    let roundDown = parseInt((array.length - 1) / 2);
    output = (array.slice(roundDown, roundDown + 2));
  } else {
    let half = (array.length - 1) / 2;
    output = array.slice(half, (half + 1));
  }

  return output;
};

const array1 = [4, 4, 2, 4, 4];
const array2 = [2];
const array3 = [2, 4, 5, 6];
console.log(middle(array3));


assertEqual(eqArrays(middle(array1), [2]), true);
assertEqual(eqArrays(middle(array2), []), true);
assertEqual(eqArrays(middle(array3), [4, 5]), true);