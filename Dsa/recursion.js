/** @format */
//Example of a recursive function:

// The following function calculates the sum of all the elements in an array by using recursion:

function sum(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return arr.pop() + sum(arr);
  }
}
let x = sum([7, 8, 9, 99]);
// console.log(x)

function add(number) {
  if (number <= 0) {
    return 0;
  } else {
    return number + add(number - 1);
  }
}

let y = add(3);
console.log(y);
