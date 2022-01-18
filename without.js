const without = function (list, toBeRemoved) {
  let newList = [...list];
  for (let i = 0; i < newList.length; i ++) {
    for (let j = 0; j < toBeRemoved.length; j ++) {
      if (newList[i] === toBeRemoved[j]) {
        newList.splice(i, 1);
      }
    }
  }
  return newList;
};

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
console.log(without([1,2,3], [1,4,6]));

module.exports = without;