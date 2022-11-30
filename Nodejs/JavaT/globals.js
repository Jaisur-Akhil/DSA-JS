/**
 * /*
 * __dirname
 * __filename
 * console
 * Process
 * Buffer
 * setImmediate
 * settimeinterval
 * settimeout
 *
 * @format
 */
// 7.40
console.log(__dirname, "dirname");
console.log(__filename, "filename");

//buffer - nodejs provides buffer class to store raw data similar to an array of integer . buffer class is used because pure js is not good with binary data - buffer is a global class no need  to import

var buff = Buffer.alloc(10);
console.log(buff);

//buffer from array
var arrBuff = new Buffer([10, 20, 30, 40, 50]);
console.log(arrBuff);

//buffer for string
var strBuff = new Buffer("Simple and easy", "utf-8");

console.log(strBuff);

var toStr = strBuff.toString("utf8");
console.log(toStr, "this is string of buffer");

var alph = new Buffer(26);
console.log(alph);
for (var i = 0; i < 26; i++) {
  alph[i] = i + 97;
}
console.log(alph.toString("ascii"));
console.log(alph.toString("utf8", 0, 25));
console.log(alph.toString(undefined, 0, 5));
