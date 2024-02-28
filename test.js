const abc=(name,callback)=>
{
    console.log(`hello ${name}`);
    callback();
}
const abcd=()=> {
    console.log("hello1")
}

abc("divya", abcd);