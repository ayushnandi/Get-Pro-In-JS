const express = require('express')
const port = 3000
const app = express();
const  zod  = require("zod");

// ZOD is used when need to validate(check weather provided
// input by user is correct or not string for string and
// integer for integer) the input provided by user

function validateInput (arr){
    const schema = zod.arr(zod.number());
    const response = schema.safeParse(arr);
    console.log(response);
}
validateInput([1,2,3,4]);

app.listen(port, ()=> {
    console.log("server is running");
})