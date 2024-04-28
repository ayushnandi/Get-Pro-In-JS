const { readFile } = require("fs")

function onDone(){
    console.log("fn Done ")
}
readFile("random.txt",onDone)  // Async fn  -  readFile , setTimeout
setTimeout(onDone, 2000)       //
console.log("consologo after")
