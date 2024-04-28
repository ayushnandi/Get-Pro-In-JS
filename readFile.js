// Read file from txt Doc
const fs = require ("fs");

// readFile is a Asynchoronus fn
fs.readFile("random.txt" , "utf-8", function(err , data){
    console.log(data);
});

console.log("hi 1");

for(var i = 0 ; i < 10000000000 ; ){
    i++;
}
console.log("hi 2");

for(var i = 0 ; i < 100000000 ; ){
    i++;
}
console.log("hi 3");