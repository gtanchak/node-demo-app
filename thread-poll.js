process.env.UV_THREADPOOL_SIZE = 2;

const crypto = require("node:crypto");

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (e) => {
  console.log("key is generate");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (e) => {
  console.log("key is generate");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (e) => {
  console.log("key is generate");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (e) => {
  console.log("key is generate");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (e) => {
  console.log("key is generate");
});
