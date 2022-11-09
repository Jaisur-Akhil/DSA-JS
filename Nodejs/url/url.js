/** @format */

var url = require("url");
var WebAddress = "http://localhost:8080/default.html?year=2020&month=march";

var que = url.parse(WebAddress, true);

console.log(que.host, "host");//
console.log(que.hostname, "hostname");
console.log(que.path, "path");
console.log(que.pathname, "Pathname");
console.log(que.href, "href");
console.log(que.port, "port");
console.log(que.search, "search");
console.log(que.slashes, "slashes"); //boolean output
