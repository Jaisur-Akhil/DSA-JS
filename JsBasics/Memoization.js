/** @format */

function Memoization() {
  var cache = {};
  return function (num) {
    if (num in cache) {
      console.log("cached value");
      return cache[num];
    } else {
      cache[num] = num + 90;
      console.log("I am new");
      return cache[num];
    }
  };
}
let x = Memoization();
x(30);
x(30);
