// const buff1=Buffer.alloc(10);
// //Creates a zero filler buffer of length 10


// const buff2=Buffer.alloc(10,1);
// // Creates a Buffer og length 10
// //Filled with bytes which all have the value '1'

// const buff3=Buffer.allocUnsafe(10);
//     buff3.fill(0);
//     // console.log(`buffer3: ${buff3}`);
// //This method allocates a new uninitialized buffer of the specified size, and the content of the buffer is not initialized. It may contain old data from the memory, so it is important to fill the buffer before using it. Creates an unitialised buffer of length 10.

// // This is faster than calling Buffer.alloc() but the returned buffer instance might contain old data that needs to beoverwritten using fill(), write(), or other functions that fill the Buffer's contents.

// const myBuffer = Buffer.from("Hello ", 'utf-8'); 
// const mySecondBuffer = Buffer.from("Anshu👍", 'utf-8'); 
// const concat=Buffer.concat([myBuffer,mySecondBuffer]);
// console.log(concat.toString("utf-8"));
// console.log(concat.toString("latin1"));
// console.log(concat.toString("ascii"));

const str="Hello Avinash";
const buff4=Buffer.from(str,'UTF-8');
// buff4=Buffer.alloc(0);
for(const byte of buff4)
{
    console.log(byte);
}
buff4[7]=Buffer.from('z')[3];
const modifiedBuffer=buff4.toString("utf-8");
console.log(modifiedBuffer);
