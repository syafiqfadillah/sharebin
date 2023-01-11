const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Files = new Schema({
    content : {
        type : String
    }
})

module.exports = mongoose.model("files", Files)