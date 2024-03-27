const fs=require("fs");
const http = require('http');
const { encode } = require("punycode");
const readableStream=fs.createReadStream('student.txt');

res.writeHead(200, {'Content-Type': 'text/html'});
res.write('Hello World!');
res.end();
// const app = http.createServer((req,res)=>{
   
// })

// app.listen(5000,()=>{
//     console.log("listening to server 5000...")
// })