const { response } = require("../app");
const router = require("express").Router();
const validateLogin = require('../controllers/usersControllers/validateLogin')
const createAccount = require('../controllers/usersControllers/createAccount')
router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body
        const response = await validateLogin(email, password)
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

router.post('/signup', async (req, res) => {
    try {
        const {firstName, lastName, email, password} = req.body
        const response = await createAccount(firstName, lastName, email, password)
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

module.exports = router