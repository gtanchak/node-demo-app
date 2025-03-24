const crypto = require("node:crypto");

console.log("Hello world");

const passKeySync = crypto.pbkdf2Sync("password", "salt", 50000, 50, "sha512");
console.log(passKeySync.toString("hex"));
const generateKey = async () => {
  await crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (e) => {
    console.log("key is generate", e);
  });
};

generateKey();

console.log("end of code");
