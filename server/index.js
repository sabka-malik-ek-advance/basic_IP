//Server

const express = require('express');
const app = express();
const cors  = require('cors'); // for crossorigin 
const multer  = require('multer') // for file saving
const mongoose = require('mongoose'); // to connect to databse

require('dotenv').config()

app.use(cors())
app.use(express.static('../uploads'))
app.use(express.json())

// mongoose.connect(process.env.ATLAS_URI)
mongoose.connect(process.env.MONGO_URI)

// API to test connection with backend - localhost:8081/test
app.get('/test',(req,res)=>{
     res.json({'status':"connected"})
     console.log("Connected");
})


//LOGIN & REGISTER
// API for login - localhost:8081/api/login
app.get('/api/login',async (req,res)=>{
    try{
         const user = await User.findOne({
              email: req.query.email,
              password: req.query.password,    
         })
         if(user){
              res.json({
                   status: "ok",
                   message: "User Logged in",
                   user:  user.email,
                   firstname: user.firstname,
                   lastname: user.lastname
              })
         }
         else{
              res.json({
                   status: "Error",
                   message:"Invalid Credentials"
              })
         }
         console.log(res);
    }
    catch(err){
         console.log("Log in error",err);
    }
})

// API for registeration - localhost:8081/api/register
app.post('/api/register',async (req,res)=>{
    console.log(req.body);
    try{
         const user = await User.create({
              firstname: req.body.firstname,
              lastname: req.body.lastname,
              email:req.body.email,
              mobile:req.body.mobilenumber,
              password:req.body.password
         })
         res.json({
              status: "ok",
              message: "User Logged in",
              user:  user.email,
              firstname: user.firstname,
              lastname: user.lastname
         })
    }
    catch(err){
         res.json({status:"error",error:err})
         console.log("Error",err);
    }
})


app.listen(8081,()=>{
     console.log("Running on port 8081");
})