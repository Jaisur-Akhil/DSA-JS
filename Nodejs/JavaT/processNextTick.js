/** @format */

setImmediate(() => {
  console.log("1st immediate");
});

setImmediate(() => {
  console.log("2nd immediate");
});

process.nextTick(() => {
  console.log("1st Provess");
});

process.nextTick(() => {
  console.log("2nd Process");
});
