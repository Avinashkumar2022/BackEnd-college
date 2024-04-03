const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

const server=http.createServer((req,res)=>
{
    const readStream=fs.createReadStream("example.txt");
    res.writeHead(200,{
        'content-Type': 'text/plain',
        'content-encoding': 'gzip'
    });
    readStream.pipe(zlib.Gzip()).pipe(res);
    readStream.on('error',(err)=>{
        console.error("Error reading the file: ",err);
        res.statusCode=500;
        res.end('Internal Server error');
    });
});