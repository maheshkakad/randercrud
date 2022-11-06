const {Router} = require("express");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config();

const {UserModel} = require("../models/User.model")

const userController = Router();

userController.post("/signup" , (req,res) => {
    const {email,password , age} = req.body;

bcrypt.hash(password, 5,async function(err, hash) {
        // Store hash in your password DB.
        if(err){
            res.send("something went wrong plz try again later")
        }
        // password
        const user = new UserModel({
            email,
            password : hash,
            age
        })
        try{
            await user.save();
            res.send("Signup sucessfull")

        }
        catch(err){
            console.log(err)
            res.send("something went wrong plz try again")
        }
        
       
    });
   
})

userController.post("/login" ,async (req,res) => {
    const {email,password} = req.body;
    const user = await UserModel.findOne({email})
    const hash =user.password

    bcrypt.compare(password, hash, function(err, result) {
        if(err){
            res.send("something went wrong plz try again later")
        }
        if(result){
            
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
            res.send({message : "login sucessfull",token})
            // console.log(token)
        }
        else{
            res.send("Invalid creditial plz sinup agin")
        }
    });
    
})

module.exports ={
    userController
}