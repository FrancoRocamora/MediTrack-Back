const {User, File} = require('../../db')


const uploadFile = async (fileName, doctorName, date, settedFileName) => {
    const newFile = await File.create({
        uniqueFileName: fileName,
        settedFileName: settedFileName,
        doctorName: doctorName,
        date: date
    })
    return 'Created'
}



module.exports = uploadFile