const express = require('express')
const port = 3000
const app = express();

app.get('/', function( req , res){
    res.send('Hello World ! ')
})

app.post('/', function( req , res){
    res.send('Hi Ayush this is from Post request')
})

app.listen(port, ()=>{
    console.log (`Listening on port ${port}`)
})