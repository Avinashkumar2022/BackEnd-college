const fs=require("fs");
const http=require("http");

const ws=fs.createWriteStream('destination.txt');
ws.write("Hello I am your worst enemy.");
const rs=fs.createReadStream('destination.txt',{encoding:"utf-8",highWaterMark:2});

const server= http.createServer((req,res)=>{
rs.on("data",(chunk)=>{
    res.end(chunk);
});


//     res.end("Hello I am the response");
// })
// server.listen(1000,()=>{
//     console.log("listening to port number 1000");
})