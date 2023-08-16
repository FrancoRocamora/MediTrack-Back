const {User} = require('../../db')
const crypto = require('crypto')
require("dotenv").config();
const {SALT} = process.env;
const validateLogin = async (email, password) => {
    const salt = SALT
    const pass = crypto.createHash(salt).update(password).digest("hex")
 const newLogIn = await User.findOne({where : {email: email}})
    if(newLogIn){
        if(newLogIn.password === pass){
            return 'Ok'
        } else {
            return 'Rejected'
        }
    } else {
        return 'Not mail'
    }
}


module.exports = validateLogin