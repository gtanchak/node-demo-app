const fs = require("fs");

const a = 100;

setImmediate(() => console.log("setImmediate"));

Promise.resolve("Promise resolved").then(console.log);

fs.readFile("./file.txt", "utf-8", () => {
  console.log("file read");
});

setTimeout(() => {
  console.log("set Timeout");
}, 1000);

process.nextTick(() => console.log("Process next tick"));
function App() {
  console.log("a =", a);
}

App();
console.log("last Line of the code.");
