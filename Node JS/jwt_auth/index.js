const express = require('express')
const port = 3000
const app = express();

/* learning :

    (for offline compilers :)
    so when ever if you want to run the code you always need to 
    make sure that all the npm's should be installed

*/

/*
    JSON Web Tokens (JWTs) are a standardized way to securely
    send data between two parties
*/


const jwt = require("jsonwebtoken");

const info = {
    name : "Ayush Nandi",
    ID : "21BCE10875",
    AccountNo : 216846827534 , 
};

const token = jwt.sign(info, "secret_key");
console.log(token);

/*
    GENERATED TOKEN :
    example:{
        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQXl1c2ggTmFuZGkiLCJJRCI6IjIxQkNFMTA4NzUiLCJBY2NvdW50Tm8iOjIxNjg0NjgyNzUzNCwiaWF0IjoxNzE1NjA4MTg5fQ.3vxopViz2lha-bZfON3SCyyFRMng_MIMf6QVk2doNDA
    } 
    each time when ever the server is restarted, each time a new token is generated which contains info about the defined values 
 */

const generatedToken = jwt.verify(token ,"secret_key");
console.log(generatedToken);

app.listen(port);