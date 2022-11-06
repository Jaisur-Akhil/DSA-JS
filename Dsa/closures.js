/** @format */

let x = 100;
var l = 1;
let y = () => {
  let z = 200;
  console.log(x);
  x = 20;
  console.log(x);
  l = 90;
  console.log(l);
};
y();
console.log(x);
console.log(l);
