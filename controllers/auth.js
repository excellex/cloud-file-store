const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')
const User = require('../models/user')
const File = require('../models/file')
const fileService = require('../services/fileService')

const saltRounds = 10;

module.exports.signUp = async (req, res) => {
  try {
    const errors = validationResult(req)
    
    if (!errors.isEmpty()) {
      return res.status(400).json({  errors })
    }

    const { email, password } = req.body;
    const candidate = await User.findOne({ email });

    if (candidate) {
      return res.status(400).json({ message: `User with email ${email}  already exist` })
    }

    const user = new User({
      email,
      password: bcrypt.hashSync(password, saltRounds)
    })

    user.save()
    await fileService.createDir(new File({user: user._id, name: user._id}))
    res.json({ success: true, message: 'User has been created' })
  } catch (e) {
    res.send({ message: 'Server error' })
  }
}

module.exports.signIn = async (req, res) => {

  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).json({ message: 'The user is not found' })
    }

    const isPassValid = bcrypt.compareSync(password, user.password)

    if (!isPassValid) {
      return res.status(404).json({ message: 'Invalid password' })
    }

    const token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: '7d' })
    return res.json({
      success: true,
      token,
      user: {
        id: user.id,
        email: user.email,
        diskSpace: user.diskSpace,
        usedSpace: user.usedSpace,
        avatar: user.avatar,
        // files: [{ type: Types.ObjectId, ref: 'File' }]
      }
    })

  } catch (e) {
    res.send({ success: false, message: 'Server error' })
  }
}

module.exports.auth = async (req, res) => {

  try {
    const user = await User.findOne({ _id: req.user.id })
    const token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: '1d' })
   
    return res.json({
      success: true,
      token,
      user: {
        id: user.id,
        email: user.email,
        diskSpace: user.diskSpace,
        usedSpace: user.usedSpace,
        avatar: user.avatar,
        // files: [{ type: Types.ObjectId, ref: 'File' }]
      }
    })

  } catch (e) {
    res.send({ success: false, message: 'Server error' })
  }
}
