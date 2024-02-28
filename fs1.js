const fs= require("fs");
	fs.writeFile("/catch/intro.txt","i am the original data",(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("Success")
        }
				});
