const {User} = require('../../db')

const validateLogin = async (email, password) => {
 const newLogIn = await User.findOne({where : {email: email}})
    if(newLogIn){
        if(newLogIn.password === password){
            return 'Ok'
        } else {
            return 'Rejected'
        }
    } else {
        return 'Not mail'
    }
}


module.exports = validateLogin