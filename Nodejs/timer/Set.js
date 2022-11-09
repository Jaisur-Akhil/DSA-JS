/** @format */

// setTimeout(() => {
//   console.log("This is superb");
// }, 2000);

// setInterval(() => {
//   console.log("Will i be repeating?");
// }, 0.5);

//function is executed after all the statements in script have finished executing.

function myFunction(platform){
    console.log("Hi, Welcome to " + platform);
}

console.log("Before the setImmediate call")
let timerID = setImmediate(myFunction, "Educative");
console.log("After the setImmediate call")
for(let i=0; i<10; i++){
    console.log("Iteration of loop: "+i);
}
