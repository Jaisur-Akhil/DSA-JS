/** @format */
var request = require("request");
let func = async function Ayncfun(req, res) {
  let response = await request("http://localhost:3000");
  if (response.err) {
    console.log(error.message);
  } else {
    console.log("Fetched Response");
  }
};
console.log(func);
