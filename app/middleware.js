// Write a middleware function in express js that logs the timestamp, HTTP method, adn url of every incoming request to a fiule named 'request.log'. Ensure that teh log file is created if it doesn't exist and that new log entries are appended to it.

const { log } = require("console");
const express = require("express");
const app= express();
const fs=require("fs");

app.use((req,res,next)=>{
    let data=`${new Date().toISOString()}: ${res.method} ${req.url}\n`;
    fs.appendFile('request.log',data,(err,data)=>{
        if(err){
            return res.status(404).send("Error while writing to file")
        }
    })
    next();
})
app.get("", (req,res)=>{
    res.send("Welcome to the Home Page!");
});

app.listen(3000,()=>{ 
    console.log("Server is running on : 3000")
});