// const t=require(timers);
const intervalId = setInterval(() => {
    console.log('This message will be printed every 2 seconds.');
  }, 2000);
  const clear=setTimeout(()=>
  {
    clearInterval(intervalId);
    console.log("Interval has been cleared");
  },10000);