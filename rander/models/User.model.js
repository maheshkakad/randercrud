const mongoose = require("mongoose")

const userSchma = new mongoose.Schema({
    email : {type: String,required: true},
    password : {type : String, required : true},
    age : {type : Number , required :true},
    userId : {type :String, required: true}
})

const UserModel = mongoose.model("user", userSchma) 

module.exports = {
    UserModel
} 