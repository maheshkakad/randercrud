const mongoose = require("mongoose")

const noteSchma = new mongoose.Schema({
    Heading : {type: String,required: true},
    Notes : {type : String, required : true},
    tag : {type : String , required :true}
})

const NoteModel = mongoose.model("notes", noteSchma) 

module.exports = {
    NoteModel
} 