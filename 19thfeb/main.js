const http = require("http");

let obj = { name: "nash", city: "Neverland" };

const server = http.createServer((req, res) => {
    console.log(req.method)
    console.log(req.url)

    if (req.method =="GET"){

        if(req.url=="/home"){
            res.writeHead(201,"tryna access home huhh?", {
                "content-type":"application/json"
            })
            res.write("well, here it is...your home") 
            res.end();

        }

        else if(req.url=="/about"){
            res.writeHead(201,"tryna access about now huhh?", {
                "content-type":"application/json"
            })
            res.write("well, here it is...your about") 
            res.end();

        }

        else{
            res.writeHead(201, "response received", {
                "Content-Type": "application/json",
            });
            res.write(JSON.stringify(obj)); 
            res.end();
        }
    }

    else{
        res.end("invalid request")
    }

});

server.listen(3101, () => {
    console.log("server running on port 3101");
});
