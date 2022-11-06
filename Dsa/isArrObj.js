/** @format */

//isArray

var arrayList = [1, 2, 3];
// var a = [];
// var arrayList = { 1: 2, 2: 3 };

let x = Array.isArray(arrayList);
// console.log(x);
// let x1 = typeof a;
// console.log(x1, "what is this");

// isObject
var objList = { 1: 2, 4: 6 };
let y = typeof objList;
// console.log(y);

let z = objList instanceof Object;
// console.log(z, "instance of is used for Object");
("strict");
// isInt
// let num = 60;//true
// let num = 60.00;//true
let num = 60.3; // false
let isInt = num % 1 === 0;
// console.log(isInt, "this is result");

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

let q = typeof n;
console.log(q);
