const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const countLetters = function(sentence) {
  let counts = {};
  for (const letter of sentence) {
    if (counts[letter]) {
      counts[letter] ++;
    } else {
      counts[letter] = 1;
    }
  }
  console.log(counts);
  return counts;
};

const sentence = "banana";
const answer = {b: 1, a: 3, n: 2};

assertEqual(countLetters(sentence, answer));