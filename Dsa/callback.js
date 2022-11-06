/** @format */

// Functions that are used as an argument to another function are called callback functions

function divByHalf(sum) {
  console.log(Math.floor(sum / 2));
}

function MultBy2(sum) {
  console.log(sum * 2);
}

function OperationSum(n1, n2, operation) {
  var sum = n1 + n2;
  operation(sum);
}

OperationSum(3, 3, divByHalf);
OperationSum(5, 5, MultBy2);
