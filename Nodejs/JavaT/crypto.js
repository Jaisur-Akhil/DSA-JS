/** @format */

const crypto = require("crypto");
// console.log(crypto);

const secret = "abcdefg";
const hash = crypto
  .createHmac("sha256", secret)
  .update("Welcome to Learning Tip with kil")
  .digest("base64");
console.log(hash);
//1d42c9daba393f772f2fd0c655c3c9169104015991987eba272105986242a598

//HULJ2ro5P3cvL9DGVcPJFpEEAVmRmH66JyEFmGJCpZg=

const algo = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

function encrypt(text) {
  let cipher = crypto.createCipheriv(algo, Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString("hex"), encryptedData: encrypted.toString("hex") };
}

decrypt = (text) => {
  let iv = Buffer.from(text.iv, "hex");
  let encryptedText = Buffer.from(text.encryptedData, "hex");
  let decipher = crypto.createDecipheriv(algo, Buffer.from(key), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
};

var h2 = encrypt("hello welcome to Ammas");
console.log(h2);
console.log(decrypt(h2));
