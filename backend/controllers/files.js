const Files = require("../models/files.js")

function addFile(req, res) {
    Files({}).save().then(result => res.status(200).json({
        message : "File Berhasil Dibuat",
        id : result._id
    }))
}

function saveFile(req, res) {
    Files.updateOne({ _id : req.params.id }, { content : req.body.content })
    .then(() => res.status(200).json({
        messsage : "File Berhasil Diupdate!"
    }))
}

function getFile(req, res) {
    Files.find({ _id : req.params.id })
    .then(result => res.status(200).json({
        data : result
    }))
    .catch(err => console.error(err)) 
}

module.exports = { addFile, getFile, saveFile }