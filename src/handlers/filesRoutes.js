const { response } = require('../app')
const multer = require('multer')
const router = require('express').Router()
const path = require('path')
const uploadFile = require('../controllers/filesControllers/uploadFile')
const getFiles = require('../controllers/filesControllers/getFiles')
const getAllUserFiles = require('../controllers/filesControllers/getAllUserFiles')
//Multer storake config

const storage = multer.diskStorage({
    destination: function (req, file, cb) {

        cb(null, 'files/')
    },
    filename: function (req, file, cb) {
        let ext = ''; // set default extension (if any)
        if (file.originalname.split(".").length>1) // checking if there is an extension or not.
            ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
        cb(null, Date.now() + ext)
    }
})
const upload = multer({ storage: storage });

//---------------------------------------------------------------------------------------------------------

router.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const extension = req.file.mimetype.split('/').pop()
        const fileName = req.file.filename 
        const doctorName = req.body.doctorName
        const date = req.body.date
        const settedFileName = req.body.settedFileName
        const userEmail = req.body.userEmail
        const response = await uploadFile(fileName, doctorName, date, settedFileName, userEmail, extension)
        res.status(200).send(response)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})


router.get('/myFiles', async (req, res) => {
    try {
        const email = req.query.email
        const response = await getAllUserFiles(email)
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})



router.get('/download', async (req, res) => {
    try {
        const email = req.query.email
        const fileName = req.query.fileName
        const response = await getFiles(email, fileName)
        res.status(200).download(__dirname + '/../../files/' + response[0])
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = router