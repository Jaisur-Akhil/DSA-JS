/** @format */

var a = [1, 2, 3, 4, 5, 6, 67, 8, 9];
var backup = a;
console.log(backup, "this is backup");

a = [];
console.log(a);

backup.length = 0;
console.log(backup);
