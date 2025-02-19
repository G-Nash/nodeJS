const http =require("http")

let obj={name: "nash", city: "Neverland"};

const server=http.createServer((req,res)=>{
    res.writeHead(201, "response received",{
        "conten-type": "application/json",
    });
    res.write(JSON.stringigy(obj));
    res.end();
})

server.listen("3101",()=>{
    console.log("server running")
})