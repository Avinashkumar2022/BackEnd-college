const express=require("express")
const socketio=require("socket.io")
const a=express()

// server side connection

const io =socketio(a)

io.on("connection",socket=>
{
console.log("a user connected")
})

//message by client
socket.on("chatmessage",msg)

//broadcast the message of client to other clients
io.emit("chatmessage",msg)

io.on("disconnect",socket=>
{
    console.log("a user has been disconnected")
})

a.listen(3000,()=>
{
    console.log("server started")
})






