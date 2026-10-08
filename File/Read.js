const fs = require("fs");
const path = require("path");

// This is for Sync
const result = fs.readFileSync(path.join(__dirname,"myself.txt","utf8"))
console.log(result);

// This is for Async
fs.readFile(path.join(__dirname,"myself.txt"),"utf8",(err,result)=>{
    if(err){
        console.log("Error")
    }
    else{
        console.log(result)
    }
})