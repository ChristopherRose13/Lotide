const assertEqual = require('../assertEquals');
const eqArrays = require('../eqArrays');
const middle = require('../middle');

const array1 = [4, 4, 2, 4, 4];
const array2 = [2];
const array3 = [2, 4, 5, 6];

assertEqual(eqArrays(middle(array1), [2]), true);
assertEqual(eqArrays(middle(array2), []), true);
assertEqual(eqArrays(middle(array3), [4, 5]), true);