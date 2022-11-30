/** @format */

const dns = require("dns");
dns.lookup("www.javatpoint.com", (err, address, family) => {
  console.log("address", address);
  console.log("family", family);
});
