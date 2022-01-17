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

module.exports = middle;