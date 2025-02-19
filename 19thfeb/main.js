const http = require("http");

let obj = { name: "nash", city: "Neverland" };

const server = http.createServer((req, res) => {
    res.writeHead(201, "response received", {
        "Content-Type": "application/json",
    });
    res.write(JSON.stringify(obj)); 
    res.end();
});

server.listen(3101, () => {
    console.log("server running on port 3101");
});
