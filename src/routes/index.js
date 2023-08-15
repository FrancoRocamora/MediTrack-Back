var express = require('express');
var router = express.Router();
const userRoutes = require('../handlers/usersRoutes')
/* GET users listing. */
router.use('/user', userRoutes)

module.exports = router;
