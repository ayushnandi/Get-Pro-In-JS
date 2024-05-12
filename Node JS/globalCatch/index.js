const express = require("express");
const app = express();
 
app.get('/', function(req,res) {
    console.log(req.body.Any_Undefine_value.length);
    res.json({
        msg:"done"
    })
})

// Global Catch 

// it is use for any unexprected error handeling like if 
// anythings gose off the root global catch helps to simply pass the 
// base content 

// OR 

// make error-handling middleware function. It is global. 
// You need to define it after all app.use() and routes calls. (err, req, res, next)

app.use(function (err, req, res, next){
    res.send({
        msg: "Internal Error"
    })
})
app.listen(3000);