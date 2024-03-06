const http=require("http");
const server= http.createServer((req,res)=>{
    res.end("Hello I am the response");
})
server.listen(1000,()=>{
    console.log("listening to port number 1000");
})