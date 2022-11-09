/** @format */
console.time("codezup");
var fs = require("fs");







// Async

/*
console.log("1");
fs.readFile("readtemp.txt", function (err, data) {
  if (err) {
    console.log(err);
  }
  console.log("Asynchronous read" + data.toString());

  console.log(2);
  setTimeout(() => {
  console.log("i am in right direction 3");
}, 2000);
});
console.log('4')
*/

// Sync-----------------------------------------

/*
console.log("1");
var data = fs.readFileSync("readTemp.txt");
console.log("sync read" + data.toString());
console.log("2");
setTimeout(() => {
  console.log("i am in right direction 3 ");
}, 2000);
console.log("4");
*/

//open ---------------------------------------------------
/*
console.log("Open file");
fs.open("readTemp.txt", "r+", function (err, fd) {
  console.log("File opened successfully", fd);
});
*/

//Stats---------------------------------
/**
fs.stat("readTemp.txt", function (err, stats) {
  console.log(stats);
});
 */

//read from file paste it to webbrowser-------------------------------------------------
/*
const http = require("http");
http
  .createServer((req, res) => {
    fs.readFile("readTemp.txt", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write(data);
      res.end("Ending this  /n");
    });
  })
  .listen(3010);
*/

// rename ------------------------------------------------------------------
/* 
fs.rename("text.txt", "readTemp.txt", (err) => {
  console.log("Renamed Successfully");
});
*/
console.timeEnd("codezup");
