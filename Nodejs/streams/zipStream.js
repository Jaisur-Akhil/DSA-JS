/** @format */

var fs = require("fs");
var zlib = require("zlib");

// -> Zip logic
/*
fs.createReadStream("stream.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("stream.txt.gz"));
console.log("file compressed");
*/
// -> Unzip logic
fs.createReadStream("stream.txt.gz")
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream("un.txt"));

console.log("File Decompressed");
