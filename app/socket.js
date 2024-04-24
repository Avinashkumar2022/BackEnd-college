const express=require("express")
const socketio=require("socket.io")
const a=express()

// server side connection

const server=a.listen(3000,()=>
{
    console.log("server started")
})

const io =socketio(server);

a.use(express.static(path.join(__dirname,"index.html")));


io.on("connection",socket=>
{
    console.log("a user connected");
    //Listen for messages by client
    socket.on("chatmessage",msg =>
    {
        //broadcast the message of client to other clients
        io.emit("chatmessage",msg);
    });
    socket.on("disconnect", ()=>
    {
        console.log("An User disconnected");
    })
})










