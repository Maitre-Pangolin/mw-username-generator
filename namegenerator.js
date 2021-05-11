const { adjective, noun } = require("./res/words");

function randArr(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function firstToUpper(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}
module.exports = () =>
  firstToUpper(randArr(adjective)) + firstToUpper(randArr(noun));
