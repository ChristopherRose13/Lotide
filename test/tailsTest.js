const tail = require('../tail');
const assert = require('chai').assert;


// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3);

describe("#tails", () => {
  it("returns Labs for [Yo Yo, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), "Labs");
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]),[]);
  });
});