const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const filesRouter = require("./routes/files.js")

const app = express()
const port = 3333

app.use(cors())
app.use(express.json())
app.use(filesRouter)

mongoose.connect("mongodb+srv://syafiq:IMPpFhxnpKHKbkA6@cluster0.udtezio.mongodb.net/?retryWrites=true&w=majority", { dbName : "sharebin-db" })
    .then(() => {
        app.listen(port, () => {
            console.log("server running...")
        })
    })
    .catch(err => {
        console.err(err)
    })