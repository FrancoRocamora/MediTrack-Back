const {File, User} = require('../../db')


const uploadFile = async (fileName, doctorName, date, settedFileName, userEmail, extension) => {
    const user = await User.findOne({where: {email: userEmail}})
    const newFile = await File.create({
        uniqueFileName: fileName,
        settedFileName: settedFileName,
        doctorName: doctorName,
        date: date,
        extension: extension,
        UserId: user.id
    })
    return 'Created'
}



module.exports = uploadFile