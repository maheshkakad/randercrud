const {Router} = require("express");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config();

const {NoteModel} = require("../models/notes.model")

const notesController = Router();

// notesController.use((req,res,next) => {
   
//     next();
// })

notesController.get("/", async(req,res) => {
    const notes = await NoteModel.find({userId : req.body.userId});
    res.send(notes)
   
})

notesController.post("/create", async(req,res) => {
    const {Heading, Note, Tag,userId} = req.body;
    const note = new NoteModel({
        Heading,
        Note,
        Tag,
        userId
        
    })
    try{
        await note.save();
        res.send("note created")
    }
    catch(err){
        res.send("someting went wrong")
        console.log(err)
    }
    
   
})

module.exports ={
    notesController
}