/** @format */

var express = require("express");

var app = express();
app.get("/", (req, res) => {
  console.log("sending ");
  res.send("HelloWorld");
});
app.listen(8081);
