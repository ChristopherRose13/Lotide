const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  if (arr.length > 0) {
    return arr[0];
  }
  return undefined;
};

assertEqual(head([5,6,7]), 5);
assertEqual(head([]), "Hello");