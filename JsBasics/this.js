/** @format */

// global object .this refers to window object in web browser and global object in Node Application

//in browser
this.name = "Akhil";
// console.log(window.name);
console.log(global.name);
/*
Function invocation
Method invocation
Constructor invocation
Indirect invocation
Each of the invocations results in a different this behavior*/
