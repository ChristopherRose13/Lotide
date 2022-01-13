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

const eqObjects = function(object1, object2) {

  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let object1Key of obj1Keys) {
    console.log(Array.isArray(object1Key));
    if (Array.isArray(object1[object1Key])) {
      if (eqArrays(object1[object1Key], object2[object1Key ]) === false) {
        return false;
      }
    } else {
      if (object1[object1Key] !== object2[object1Key]) {
        return false;
      }
    }

  }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  assertEqual(eqObjects(actual, expected), true);
};

assertObjectsEqual({a: "b"}, {a: "b"});