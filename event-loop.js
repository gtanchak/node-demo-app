const fs = require("fs");

setImmediate(() => {
  process.nextTick(() => console.log("set next tikc"));
  console.log("setImmediate");
});

Promise.resolve("Promise resolved").then(console.log);

fs.readFile("./file.txt", "utf-8", () => {
  console.log("file read");
  Promise.resolve("2nd Promise").then(console.log);
});

setTimeout(() => {
  console.log("set Timeout");
}, 0);

process.nextTick(() => {
  process.nextTick(() => console.log("inner nexttick"));
  console.log("Process next tick");
});

console.log("last Line of the code.");
