/** @format */

// <!-- https://hackernoon.com/javascript-practical-coding-challenges-for-beginners-4bq3ugr -->

/* <!-- Coding challenge #1: Print numbers from 1 to 10 -->

for(var counter =0 ; counter<=10 ; counter++){
console.log(counter)
}*/

//odd number in 100

for (let i = 1; i <= 100; i += 2) {
  //   console.log(i);
}

//even number in 100
for (let i = 0; i <= 100; i += 2) {
  //   console.log(i);
}

// print multipication table of 7;
//print multiple of 1-10
for (let j = 0; j <= 10; j++) {
  for (let i = 0; i <= 10; i++) {
    var row = j + " *" + i + "= " + j * i;
    // console.log(row);
  }
}
//7*7=49

// sum of number from 1 to 10
var sum = 0;
for (let i = 0; i <= 10; i++) {
  sum = sum + i;
  //   console.log(sum);
}
// console.log(sum);

//exponent
let prod = 1;
for (let i = 1; i <= 10; i++) {
  prod = prod * i;
  //   console.log(prod);
}
// console.log(prod);

//add odd number > 10 and less 30
let oddCal = 0;
for (let i = 11; i <= 30; i += 2) {
  oddCal = oddCal + i;
}
// console.log(oddCal);

//celcius to fahre

const celFar = (numC) => {
  let res = numC * 1.8 + 32;
  console.log(res);
};

// celFar(50);

//far to cel
const farCel = (numF) => {
  let res = (numF - 32) / 1.8;
  console.log(res);
};
// farCel(122);

//sum of array
let aSum = [5, 6, 9, 7, 1, 2, 3, 8];
let sumA = 0;
aSum.forEach((i) => {
  sumA = sumA + i;
});
// console.log(sumA);

//avg of nummber of array
let al = aSum.length;
// console.log(al, "count of Array");
let SumAr = 0;
aSum.forEach((i) => {
  SumAr = SumAr + i;
});
// console.log(SumAr, "total of array");
let avgA = SumAr / al;
// console.log(avgA, "Avg");

//rem nev number from arr and return new array
let mixArr = [10, 9, -1, 5, -9, 8, -3, -2, 5, -4, 7, 1, -0];
let posArr = [];
let negArr = [];

mixArr.forEach((i) => {
  if (i >= 1) {
    posArr.push(i);
  } else {
    negArr.push(i);
  }
});
// console.log(posArr);
// console.log(negArr);

//max andd  min of array

let minArr = 0;
let maxArr = 0;
mixArr.forEach((i) => {
  if (minArr > i) {
    minArr = i;
  } else if (maxArr < 1) {
    maxArr = i;
  }
});
// console.log(minArr);
// console.log(maxArr);

// = 0, 1, 1, 2, 3, 5, 8, 13, 21, - Fibonacci with out recursion;

let n1 = 0;
let n2 = 1;
let temp = 0;

for (let c = 0; c <= 10; c++) {
  temp = n1 + n2; //1,2
  //   console.log(temp, +" " + c);
  n1 = n2; //1
  n2 = temp; //1
}

//shift array to 1 positon right
let moveAr = [1, 2, 3];
// console.log(moveAr);

function moveRight(moveAr) {
  let xa = moveAr.shift();

  console.log(moveAr);
  moveAr.push(xa);
  console.log(moveAr);
}
let movementA = moveRight(moveAr);
// console.log(movementA);

//prime number. 1.10

//shift array to 1 postion left
let moveAr0 = [1, 2, 3];
// console.log(moveAr0);
let moveLeft = (moveAr0) => {
  let temp = moveAr0.pop();
  //   console.log(temp);
  //   console.log(moveAr0);
  moveAr0.unshift(temp);
  //   console.log(moveAr0);
};

// moveLeft(moveAr0);

//rev an array;
let rev = moveAr0.reverse();
// console.log(rev);
//rev ny function
let rev0 = [];

function revAr(moveAr0) {
  for (let i = moveAr0.length; i >= 1; i--) {
    rev0.push(i);
  }
  //   console.log(rev0);
}
revAr(moveAr0);

//rev a string.

let sWord = "Hel456";
let revS = sWord.split("").reverse().join("");
// console.log(revS);

//function
const revStringFunc = (sWord) => {
  let temp = "";
  for (let i = sWord.length - 1; i >= 0; i--) {
    // console.log(i);
    var char = sWord[i];
    temp += char;

    console.log(temp);
  }
};
// revStringFunc(sWord);

//merger2 array //function

// push each element to empy array
// ... spread operator

let finalMergedArray = [];
console.log(finalMergedArray, "from 1st");
let mergerArrayFunction = (a, b) => {
  //spread operator
  //   finalMergedArray = [...a, ...b]; //spread
  //   console.log(finalMergedArray);

  //  for off
  for (let i of a) {
    finalMergedArray.push(i);
  }
  console.log(finalMergedArray, "from a");
  for (let i of b) {
    finalMergedArray.push(i);
  }
  console.log(finalMergedArray, "from b ");
};

let mergerA1 = [1, 2, 3, 4];
let mergerA2 = [6, 7, 8, 9, 10];
mergerArrayFunction(mergerA1, mergerA2);

//remove duplicate when merge
///a1 = [1,2,3,4,5,6], a2=[4,5,6,7,8,9]
// new=[1,2,3,4,5,6] //unique

let x1 = [1, 2, 3, 4, 5, 6];
let x2 = [4, 5, 6, 7, 8, 9];
let xtemp = [...x1, ...x2];
let xRemDup = [...new Set(xtemp)];
console.log(xRemDup);

// from 25 / 26
