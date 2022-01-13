const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const eqObjects = function(object1, object2) {

  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  let areEqual = true;
  let falseCount = 0;

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  obj1Keys.forEach(key1 => {
    obj2Keys.forEach(key2 => {
      if (key1 === key2) {
        if (object1[key1] !== object1[key2]) {
          areEqual = false;
        }
      } else {
        falseCount ++;
      }
    });
    if (falseCount === obj2Keys.length) {
      areEqual = false;
    }
    falseCount = 0;
  });
  return areEqual;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab,ba), true);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc);
assertEqual(eqObjects(ab,abc), false);