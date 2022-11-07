/** @format */

// reverse each word of String
let string = "Welcome to this JS Guide";

let revSent = revBySep(string, ""); //ediuG SJ siht ot emocleW
console.log(revSent);
string = revSent;
let revWord = revBySep(string, " ");
console.log(revWord);

function revBySep(string, seperator) {
  let x = string.split(seperator).reverse().join(seperator);
  return x;
}

//logic - console.log(c.split("").reverse().join(""));
