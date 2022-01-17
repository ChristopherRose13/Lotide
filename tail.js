const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  if (arr.length > 1) {
    return arr.slice(arr.length - 1)[0];
  }
  return [];
};
const result = tail(["Hello", "Lighthouse", "Labs", "code"]);
console.log(result);
//assertEqual(result.length, 4);
//assertEqual(result, "Labs");
module.exports = tail;
