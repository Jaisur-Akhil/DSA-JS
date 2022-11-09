/** @format */
var fs = require("fs");

// -> ReadStream
var data = "";
var dataWrite = "I am random content";

var readerStream = fs.createReadStream("stream.txt");
readerStream.setEncoding("UTF8");
readerStream.on("data", function (chunk) {
  data = data + chunk;
});
readerStream.on("end", function () {
  //   console.log(data);
});

readerStream.on("error", function (err) {
  //   console.log(err.stack);
});
// console.log("program Ended");

//------------------------------------
// ->WriteStream
var writerStream = fs.createWriteStream("output.txt");
writerStream.write(dataWrite, "utf-8");
writerStream.end();
writerStream.on("finish", function () {
  //   console.log("Write Completed");
});
writerStream.on("error", (err) => {
  //   console.log(err.stack);
});
// console.log("Program Ended");

// ------------------------
// ->Piping the Streams

var readStream = fs.createReadStream("stream.txt");
var writeStream = fs.createWriteStream("copyWrite.txt");

readStream.pipe(writeStream);
console.log("program Ended");
