/** @format */
//https://stackabuse.com/executing-shell-commands-with-node-js/
const { exec } = require("child_process");
const { stderr } = require("process");

exec("dir", (error, stdout, stderr) => {
  if (error) {
    console.log(error.message);
    return;
  }
  if (stderr) {
    console.log(stderr);
    return;
  }
  console.log(stdout);
});
