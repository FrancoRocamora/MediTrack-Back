const {User, File} = require('../../db')


const getAllUserFiles = async (email) => {
    const user = await User.findOne({where: {email: email}})
    const files = await File.findAll({where: {UserId: user.id}})

    return files
}



module.exports = getAllUserFiles