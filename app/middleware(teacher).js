const express=require('express');
const fs=require('fs');

const app=express();

// Middleware function to log incoming requests to a file

app.use((req,res,next)=>
{
    const logFilePath=__dirname+"/request.log";
    const logEntry=`${new Date().toISOString()}: ${req.method} ${req.url}\n`;

    fs.appendFile(logFilePath,logEntry,(err)=>
{
    if(err)
    {
        console.error('Error writing to log file: ',err);
    }
})
next(); // Pass control to the next middleware function or route handler
})

app.get("", (req,res)=>{
    res.send("Refresh to log the info in the file");
});

app.listen(3000,()=>{ 
    console.log("Server is running on : 3000")
});