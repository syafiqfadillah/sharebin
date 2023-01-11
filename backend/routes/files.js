const express = require("express")
const router = express.Router()

const { addFile, getFile, saveFile } = require("../controllers/files.js")

router.post("/add-file", addFile)
router.get("/get-file/:id", getFile)
router.put("/save-file/:id", saveFile)

module.exports = router