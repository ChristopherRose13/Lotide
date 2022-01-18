const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEquals = require('./assertEquals');
const assertObjectEquals = require('./assertObjectEquals');
const countLetters = require('./countLetter');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEqual : assertArraysEqual,
  assertEquals : assertEquals,
  assertObjectEquals : assertObjectEquals,
  countLetters : countLetters,
  countOnly : countOnly,
  eqArrays : eqArrays,
  eqObjects : eqObjects,
  findKey : findKey,
  findKeyByValue : findKeyByValue,
  letterPositions : letterPositions,
  map : map,
  takeUntil : takeUntil,
  without : without
};