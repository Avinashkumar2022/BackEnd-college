const ev=require("events");
const event=new ev;
event.on("start",number=>{
    console.log(`The event is triggered and the number is ${number}`);
})
event.emit("start",5);

event.on('start2',(start,end)=>
{
    console.log(`Started from ${start} to ${end}`)
})
event.emit("start2",5,10);