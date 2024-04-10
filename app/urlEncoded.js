const express=require("express");
const fs=require("fs");
const app=express();

app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    const readStream=fs.createReadStream('index.html');
    readStream.pipe(res);
})

app.post('/submit',(req,res)=>
{
    console.log(req.body);
    res.send(req.body)
    let data=JSON.stringify(req.body);
    const writeStream=fs.createWriteStream('body.json');
    writeStream.write(data);
    
    
});
app.listen(3000,()=>
{
    console.log("server started")
})