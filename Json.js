/*

Create an object -> Convert it into JSON -> Add this data from that file -> Again Convert it back to JS object-> Show data on the console -> Show the JSON data on browser via server

*/
// const util = require('util');
const fs=require("fs");
const http=require("http");


const obj={
    name:"avinash",
    roll:17,
    reg:12108839
}

const jsonString=JSON.stringify(obj);
// console.log(jsonString);

//adding it to a file
fs.writeFile("student.txt",jsonString,"utf-8",(err)=>{
    if(err){
        console.log("there is an error");
    }else{
        console.log("file created successfully");
    }
})

//read from a file
fs.readFile("student.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        JSON.parse(data);
        console.log(data);
        const server= http.createServer((req,res)=>{
            if(req.url=="/student.txt")
            {
                
            }
            res.end("The Json Object: "+data);
        
            // console.log(util.inspect(obj1, {depth: null}));
        })
        server.listen(1000,()=>{
            console.log("listening to port number 1000");
        })
    }
});
// const obj1= JSON.stringify(obj);
