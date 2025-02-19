const http = require("http");
// console.log(http)

const server = http.createServer((req, res) => {
  res.write("Basic nodeJS server ");
  res.end("Implementation");
});
server.listen("3101", () => {
  console.log("server is running");
});
