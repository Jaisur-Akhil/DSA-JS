/** @format */

let a = [9, 6, 8, 2, 4, 1];

//keyword
let aSort = a.sort();
// console.log(aSort);
// let aSortedRan = aSort.reverse();
// console.log(aSortedRan);

//function
let afunc = a.sort(function (a, b) {
  return a - b; // acc
  //   return b - a; //dec
});

//sort random
let afuncRandom = a.sort(function (a, b) {
  return 0.5 - Math.random();
});
// console.log(afuncRandom);
// console.log(afunc);

//Higest value of array.
let aMax = Math.max(...a);
// console.log(aMax);

let aMin = Math.min(...a);
// console.log(aMin);

//apply method for min,max
let aMinA = Math.min.apply(Math, a);
let aMaxA = Math.max.apply(Math, a);

// console.log(aMinA);
// console.log(aMaxA);

//function for max in array.

let maxA = a[0];
for (let i = 1; i < a.length; i++) {
  if (a[i] > maxA) {
    maxA = a[i];
    // console.log(maxA);
  }
}
console.log(maxA);

let minA = a[0];
for (let i = 1; i < a.length; i++) {
  if (a[i] < minA) {
    minA = a[i];
  }
}
console.log(minA);
