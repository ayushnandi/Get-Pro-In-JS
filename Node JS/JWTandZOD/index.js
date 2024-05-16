const express = require('express');
const port = 3000;
const app = express();
const zod = require("zod");
const jwt = require("jsonwebtoken")

// Here we have imported few liberies and below used zod to check to verify to email and also password 

const userschema = zod.string().email();
const passwrdSchema = zod.string().min(6);
    
const secret_key = "secret"

function vaildate(username , password){
    
    const userValidate = userschema.safeParse(username);   
    const passValidate = passwrdSchema.safeParse(password);
    
    if(!userValidate.success || !passValidate.success){
        console.log("Sorry your Username/email or Password is Wrong");
        return null;
    } 
    
    // if all validation is done then the token is passed outside the function

    console.log("welcome User");
    const token = jwt.sign(username,secret_key);
    console.log("Here is your token : ", token);
    
    return token;
}

//  checking weather the token provided can be decoded or not  
function decodeToken(token){
    if(jwt.decode(token)){
        return true;
    }
    else{
        return false;
    }
}

//  checking that provided token is even valid or not 
function verifyToken(token){
    let ans = true;
    try{
        jwt.verify(token,secret_key)
    }
    catch(e){
        ans = false;
    }
    return ans
}

const ans = vaildate("ayushnandi69@gmail.com","ayushnandi");
console.log(ans);

console.log(decodeToken(ans)) 

console.log(verifyToken(ans))