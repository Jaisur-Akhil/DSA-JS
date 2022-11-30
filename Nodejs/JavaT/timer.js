/** @format */
//setinterval
let Interval = setInterval(() => {
  console.log("second has passed");
}, 1000);

console.log("something");

let timeout = setTimeout(() => {
  clearInterval(Interval);
}, 10000);

clearTimeout(timeout);

/*setImmediate() is designed to execute a script once the current poll (event loop) phase completes.

• setTimeout() schedules a script to be run after a minimum threshold in ms has elapsed.*/
