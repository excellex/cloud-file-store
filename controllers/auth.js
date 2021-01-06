const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator')
const User = require('../models/user')

const saltRounds = 10;

module.exports.signUp = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Uncorrect request', errors })
    }
    const { email, password } = req.body
    const candidate = await User.findOne({ email })

    if (candidate) {
      console.log('res status 400');
      return res.status(400).json({ message: `User with email ${email}  already exist` })
    }

    const user = new User({
      email,
      password: bcrypt.hashSync(password, saltRounds)
    })
    user.save()
    res.json({ message: 'User has been created' })
  } catch (e) {
    res.send({ message: 'Server error' })
  }
}
