const http = require("http");
// console.log(http)

const server = http.createServer((req, res) => {
  res.write("hello world ");
  res.end("Nash");
});
server.listen("3101", () => {
  console.log("server is running");
});