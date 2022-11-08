/** @format */

// immediate invoke fucntion expression
/*
for (var i = 0; i < 5; i++) {
  (function (x) {
    setTimeout(function () {
      console.log(x);
    }, 1000);
  })(i);
  console.log(x);
}
*/
let sayHello = function (name) {
  console.log(`Hello ${name}`);
};

sayHello("Chris");
