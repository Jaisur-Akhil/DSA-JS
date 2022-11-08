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

// OperationSum(3, 3, divByHalf);
// OperationSum(5, 5, MultBy2);

// ----------------------------------

// Callbacks are primarily used while handling asynchronous operations like – making an API request to the Google Maps, fetching/writing some data from/into a file, registering event listeners and related stuff. All the operations mentioned uses callbacks. This way once the data/error from the asynchronous operation is returned, the callbacks are used to do something with that inside our code.

function add(a, b, callback) {
  console.log(`${a + b}`);
  callback;
}
function disp() {
  console.log(` this is the sum 
  of a + b`);
}

add(6, 4, disp);
