const os= require("os");
console.log("Platform of the system: "+os.platform());
console.log("Architecture of the system: "+os.arch());
let fmem=os.freemem();
let fkb=fmem/1024;
console.log("Free memory in the system: "+fkb+"kb");
let tmem=os.totalmem();
let tkb=tmem/1024;
console.log("Total memory in the system: "+tkb+"kb");

console.log("Version of the OS: "+os.version());

console.log("Uptime of the system: "+os.uptime()+"sec");

console.log("Information of the system: "+os.userInfo());
// const myArray = Object.values(person);

// console.log(os.constants.signals);