var express = require('express');
var router = express.Router();
const userRoutes = require('../handlers/usersRoutes')
const filesRoutes = require('../handlers/filesRoutes')
/* GET users listing. */
router.use('/user', userRoutes)
router.use('/files', filesRoutes)
module.exports = router;
