const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/users") {
    res.end("User login successfully.");
  }
  res.end("Hellow World");
});

server.listen(4444);
