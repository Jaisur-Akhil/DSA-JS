/** @format */
/*
Write a "mul" function which will properly when invoked as below syntax

console.log(mul(2)(3)(4)); // output : 24
console.log(mul(4)(3)(4)); // output : 48

*/

function mult(x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
}

// console.log(mult(2)(3)(4));

/*
//Add 6 to inut number
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

*/

function hey(x) {
  return 6 + x;
}
// console.log(hey(10));

/*

Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.
*/

for (let x = 0; x < 0; x++) {
  if (x % 3 == 0) {
    console.log("i am for 3", x);
  }
  if (x % 5 == 0) {
    console.log("izzzsix", x);
  }
  if (x % 3 == 0 && x % 5 == 0) {
    console.log("double", x);
  }
}

// ++ . --
let p = 5;

// console.log(--p, "--p");
// console.log(p--, "p--");
// console.log(p);
// console.log(++p, "++p");
// console.log(p);
// console.log(p++, "p++");
// console.log(p);

//multiply

let fun = function (x) {
  return function (y) {
    return x * y;
  };
};

// console.log(fun(3)(5));

//multi - a*b/c

function multiply(a) {
  return function (b) {
    return function (c) {
      return (a * b) / c;
    };
  };
}
//5.333333333333333
const res = multiply(6)(8)(9);
// console.log(res);

// palindrome("racecar") === true;
// palindrome("table") === false;

const palindrome = (str) => {
  str = str.toLowerCase();
  return str === str.split("").reverse().join("");
};
// console.log(palindrome("racecar"));


