const {User, File} = require('../../db')


const getFiles = async (email, fileName) => {
    const user = await User.findOne({where: {email: email}})
    const file = await File.findOne({where: {UserId: user.id, settedFileName: fileName}})
    return [file.uniqueFileName, file.extension]
}



module.exports = getFiles