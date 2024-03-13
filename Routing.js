const fs=require("fs");
const http=require("http");

fs.writeFile("Route.txt","hello world",(err)=>
{
    if(err){
        console.log("There was an error");
    }
    else{
        console.log("File created and data saved");
    }
})
