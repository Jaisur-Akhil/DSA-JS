/** @format */

let [x, y] = ["Maryxxyy", "Armyxxyy"];

function isAnagram(x, y) {
  var a = x.toLowerCase();
  var b = y.toLowerCase();

  a = a.split("").sort().join("");
  b = b.split("").sort().join("");
  console.log(a, " : a and " + b + " :b");

  console.log(a === b);
  return a === b;
}

isAnagram(x, y);
