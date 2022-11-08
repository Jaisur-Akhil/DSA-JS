/** @format */
//In JavaScript, the “OR” operator evaluates the values from left to right and returns the first truthy value. If none of the values are truthy, the “OR” operator will return the last operand.
let x = "Hello" || false; //1st truly value
let y = false || "yes" || 1; // will accept 1st truly value

let z = false || undefined || 0;
// all false value. this z will accept last value which was false.

// ---------------------------

console.log();

// And operator && evaluates values from left to right and returns the fist falsy value, if the operands are true it will return the last true value/

let m = "Hello" && false; //first false value

let n = 0 && "Yes" && true; //will accept the first falsy values when && is there

let o = true && "someVal" && 1; //if all true, && will accept last true value
console.log();

// ----------------------

// !  The argument is first converted into a boolean (true or false). The argument’s boolean value is then inverted and returned (true becomes false and vice versa).

let p = !false;

let q = !"hello";
console.log();

// ---------------------------------

// ?? Nullish Coalescing

// Nullish Coalescing is an operator will return the first defined value and that means value which is neither null nor undefined

// a ?? b
// if a is defined, operator will return a.

// if a isn't defined, operator will return b

let undefinedUser;
// console.log(typeof undefinedUser);

// console.log(undefinedUser ?? "Anonymous");

let definedUser = "Akhil";
// console.log(definedUser ?? "Anonymous");

// ---------------------------------------
// ==  ===

// == compares just value
// and is type coercion - means values will be converted into common type and comparison is basedon value solely

// === strict equality , value and type of element

let v = 1;
let c = "1";
console.log(v == c);
console.log(v === c);
