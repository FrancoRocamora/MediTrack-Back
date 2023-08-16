const { response } = require('../app')
const multer = require('multer')
const upload = multer({dest: 'medicalRecords/'})
const router = require('express').Router()
const uploadFile = require('../controllers/filesControllers/uploadFile')
router.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const fileName = req.file.filename
        const doctorName = req.body.doctorName
        const date = req.body.date
        const settedFileName = req.body.settedFileName
        const response = await uploadFile(fileName, doctorName, date, settedFileName)
        res.status(200).send(response)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})


module.exports = router