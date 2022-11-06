/** @format */

//What will be the output of the following code?

var a = 1;
if (function f() {}) {
  a += typeof f;
  console.log(a);
}
console.log(a);
//if statements executes at runtime
//and i guess condition statments are not accessible to play with in function

(function () {
  var c = (d = 5);
  let e = 10;
})();
// console.log(c);
console.log(d);
// console.log(e);

//But d is not declared anywhere in the function with var so it is set equal to 5 in the global scope.
