const fs = require('fs')
const path = require('path')
require('dotenv').config()
const File = require('../models/file')

class FileService {

  createDir(file) {
    const filePath = `${process.env.STOREPATH}/${file.user}/${file.path}`
    console.log(filePath);
    return new Promise((resolve, reject) => {
      try {
        if (!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath)
          return resolve({ message: 'File is created' })
        } else {
          return reject({ message: 'File is already exist' })
        }

      } catch {
        return reject({ message: 'File error' })
      }
    })
  }
}

module.exports = new FileService()
