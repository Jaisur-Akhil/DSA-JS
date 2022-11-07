/** @format */

//What will be the output of the following code?

var a = 1;
if (function f() {}) {
  a += typeof f;
  //   console.log(a);
}
// console.log(a);
//if statements executes at runtime
//and i guess condition statments are not accessible to play with in function

(function () {
  var c = (d = 5);
  let e = 10;
})();
// console.log(c);
// console.log(d);
// console.log(e);

//But d is not declared anywhere in the function with var so it is set equal to 5 in the global scope.

// --------------------------------------

(function () {
  console.log("1");
  setTimeout(() => {
    console.log("2");
  }, 1000);
  setTimeout(() => {
    console.log("3");
  }, 0);
  console.log("4");
});
// ();

// 1 async , 4 async ,3 as it was given a new thread it was waiting for code to complete. and then bought to queue stack. , 2 after 1000 ms

// --------------------------------------

var aa = 5;
function check() {
  y = 10;
  console.log(aa);
  var aa = 50;
}
function check2() {
  console.log(y);
}
// check();
// check2();
//var x has been defined and initialized inside check() after it is logged. Hoisting works only for variable declaration and not for initialization, so it returns undefined. In check(), y has been initialized to 10. Since var is not used, the variable has its scope until it encounters a variable by the given name or the global object. So when check2() is called, it logs 10 as the output.