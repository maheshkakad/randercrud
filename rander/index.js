const express = require("express");
const {userController} = require("./routes/user.routes")
const {notesController} = require("./routes/notes.routes")
const {connection} = require("./config/db");
const { authentication } = require("./middlewares/authentication");

const app =  express();
const PORT = 8080;
app.use(express.json())

app.get("/", (req,res) => {
    res.send("Home Page")
})

app.use("/user", userController)

app.use(authentication)

app.use("/notes", notesController)

app.listen(PORT, async() => {
    try{
        await connection
        console.log("Connected to DB")

    }
    catch(err){
        console.log("Error connected to DB")
        console.log(err)

    }
    console.log(`Listen on PORT ${PORT}`)
})


