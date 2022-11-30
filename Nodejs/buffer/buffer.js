/** @format */

var buffer1 = Buffer.alloc(100);
buffer1.write("Hey i am awesome");

console.log(buffer1);
/*
<Buffer 48 65 79 20 69 20 61 6d 20 61 77 65 73 6f 6d 65 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 
00 00 ... 50 more bytes>
*/

var a = buffer1.toString("utf-8");
console.log(a);

console.log(Buffer.isBuffer(buffer1));
console.log(Buffer.isBuffer(a));
