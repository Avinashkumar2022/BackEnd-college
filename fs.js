const { isUtf8 } = require("buffer");
const fs=require("fs");
// fs.appendFileSync("new.txt","I like to do nothing and sleep for the whole day");

const a=fs.readFileSync("new.txt","utf-8");
console.log(a);

fs.readFile("new.txt","i am the original data",(err)=>{
    console.log('file is created');
    if(err==null)
    throw{

    }
    console.log(err);
});
