const { Console } = require("console");

const printLoop = (n) =>{
    var sum = 0;
    for(var i = 0 ; i < n ; i++){
        sum += i;
    }
    return sum;
}
 
function syncTimefn(){
    var ans = printLoop(10);
    console.log(ans);
}

setTimeout(syncTimefn, 1000);
console.log("Hello Ayush !");