const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator')
const User = require('../models/user')
const controller = require('../controllers/auth')

const saltRounds = 10;

router.post('/signup',
  [
    check('email', 'Uncorrect email').isEmail(),
    check('password', 'Password must be longer than 3 and shorter than 12 symbols').isLength({ min: 3, max: 12 })
  ],
  controller.signUp
  // async (req, res) => {
  //   try {
  //     const errors = validationResult(req)
  //     if (!errors.isEmpty()) {
  //       return res.status(400).json({ message: 'Uncorrect request', errors })
  //     }
  //     const { email, password } = req.body
  //     const candidate = await User.findOne({ email })

  //     if (candidate) {
  //       console.log('res status 400');
  //       return res.status(400).json({ message: `User with email ${email}  already exist` })
  //     }

  //     const user = new User({
  //       email,
  //       password: bcrypt.hashSync(password, saltRounds)
  //     })
  //     user.save()
  //     res.json({ message: 'User has been created' })
  //   } catch (e) {
  //     res.send({ message: 'Server error' })
  //   }
  // }
  )

router.post('/signin',
  async (req, res) => {
    console.log(req.body);
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
      const token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: '1d' })
      return res.json({
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
      res.send({ message: 'Server error' })
    }
  })

module.exports = router
