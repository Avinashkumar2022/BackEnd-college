const http=require("http");
const fs=require("fs");
const url=require("url");

const server=http.createServer((req,res)=>
{
    let parsedURL=url.parse(req.url,true);
    console.log(parsedURL);
    console.log(parsedURL.query.name);
    if(parsedURL.pathname=='/')
    {
        let readableStream=fs.createReadStream('public/index.html');
        readableStream.pipe(res);
    }
    else if(parsedURL.pathname=='/submit' && req.method=='GET')
    {
        let writableStream=fs.createWriteStream('form_data.txt');
        let query =parsedURL.query;
        writableStream.write(query.name+'\n');
        writableStream.write(query.email+'\n');
        writableStream.on('finish')
    }
})
server.listen(5000,()=>
{
    console.log("Listening to port 5000: ");
})
