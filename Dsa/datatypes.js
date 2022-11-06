/** @format */

//falsified

"";
0, -0, NaN;
null, undefined;
false;

//True;

("Hello"); //some content between quotes;
42; // value which is not 0
true[""]; //keyword itself is true

let x = 0;

console.log(Boolean(x));




//isBoolean
let a = "";
let b = 0;
let c = -0;
let d = +0;
// let e = NAN;
let f = null;
let g = undefined;
let h = "hello";
let i = 42;
let j = [];
let k = [1, 2, 3];
let l = { 1: 2, 3: 4 };
let m = {};
let n = () => {};

console.log(Boolean(a), a);
console.log(Boolean(b), b);
console.log(Boolean(c), c);
console.log(Boolean(d), d);
// console.log(Boolean(e), e);
console.log(Boolean(f), f);
console.log(Boolean(g), g);
console.log(Boolean(h), h);
console.log(Boolean(i), i);
console.log(Boolean(j), j);
console.log(Boolean(k), k);
console.log(Boolean(l), l);
console.log(Boolean(m), m);
console.log(Boolean(n), n);
