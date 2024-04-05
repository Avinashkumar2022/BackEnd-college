const express = require('express'); 
const app = express(); 

const fs = require("fs");

app.get("/form",(req,res)=>
{
    fs.readFile("/form.html","utf-8",(err,data)=>
    {
        if(err)
        {
            console.log(err);
            return res.status(500).send("error sending the data");
        }
        res.send(data); 
    })

})