const assertEqual = require('../assertEquals');
const head = require('../head');

assertEqual(head([5,6,7]), 5);
assertEqual(head([]), "Hello");