const {User} = require('../../db')


const createAccount = async (firstName, lastName, email, password) => {
    let newUser = await User.findOne({where : {email: email}})
    if(!newUser){
        newUser = await User.create(
            {
                fullName : firstName + ' ' + lastName,
                email,
                password
            }
        )

        return newUser
    } else {
        return 'Already exist'
    }
}

module.exports = createAccount