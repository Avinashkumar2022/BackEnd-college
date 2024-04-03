/* 
How can you create a node.js server that serves a specific text file, compresses it with gzip encoding, and dynamically responds to http requests? Provide a detaield code solution
*/

const fs= require('fs');
const http= require('http');
const zlib=require('zlib');

const server= http.createServer((res,req)=>
{
    
    // const ws=fs.createWriteStream("Comp.txt");
    // ws.write("Hello world!!");
    const rs=fs.createReadStream("Comp.txt","utf-8");
    if(req.url=="/comp")
    {
        rs.on("data",(chunk)=>
        {
            res.end(chunk);
        })
        zlib.gzip("Comp.txt", (err, compressed));
    }
    else if(req.url=="/decomp")
    {
        zlib.gunzip("comp.gz",(err,decomposed)=>
        {
            console.log(decomposed);
            // res.end(decomposed.toString());
        })
    }
    else{
        res.end("file not found or no method")
    }
})