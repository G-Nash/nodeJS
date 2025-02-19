// const http = require("http");

// let obj = { name: "nash", city: "Neverland" };

// const server = http.createServer((req, res) => {
//     console.log(req.method) //returns the method user's using
//     console.log(req.url) //returns the url (after the /port) the user's using

//     if (req.method =="GET"){

//         if(req.url=="/home"){
//             res.writeHead(201,"tryna access home huhh?", {
//                 "content-type":"application/json"
//             })
//             res.write("well, here it is...your home") 
//             res.end();

//         }

//         else if(req.url=="/about"){
//             res.writeHead(201,"tryna access about now huhh?", {
//                 "content-type":"application/json"
//             })
//             res.write("well, here it is...your about") 
//             res.end();

//         }

//         else{
//             res.writeHead(201, "response received", {
//                 "Content-Type": "application/json",
//             });
//             res.write(JSON.stringify(obj)); 
//             res.end();
//         }
//     }

//     else{
//         res.end("invalid request")
//     }

// });

// server.listen(3101, () => {
//     console.log("server running on port 3101");
// });



const http = require("http");
const url= require("url");

const server=http.createServer((req,res) => {

    const parsedURL=url.parse(req.url,true)
    console.log(parsedURL)
    const tickets=parsedURL.query.tickets

    if(req.method=="GET"){
        res.writeHead(200, "trying to GET huhh?")
        res.write("gettingggggg \n")

        if(parsedURL.pathname=="/interstellar"){
            res.write(JSON.stringify({
                "movie": "Interstellar",
                "language": "English",
                "number of tickets": tickets
            }))
        }
        res.end()
    }

    else if(req.method=="POST"){
        res.writeHead(200, "trying to POST huhh?")
        res.write("postingggg")
        res.end()
    }

    
    else if(req.method=="PATCH"){
        res.writeHead(200, "trying to PATCH huhh?")
        res.write("Patchingggggg")
        res.end()
    }
    
    
    else{
        res.writeHead(200, "trying to do something i didn't mention in the code, huhh?")
        res.write("something else....")
        res.end()
    }
})

server.listen(3101,() => {
    console.log("sever running at 3101 local host (http)")
})
