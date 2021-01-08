const router = require('express').Router()
const { check } = require('express-validator')
const controller = require('../controllers/auth')
// const signUpCheck = require('../middleware/signUpCheck')
const authmiddleware = require('../middleware/auth.middleware')

router.get('/auth', authmiddleware, controller.auth)

router.post('/signup',
  /*
  как вынести в мидлваре проверку данных
  signUpCheck,
  */
  [
    check('email', 'Uncorrect email').isEmail(),
    check('password', 'Password must be longer than 3 and shorter than 12 symbols').isLength({ min: 3, max: 12 })
  ],
  controller.signUp
)

router.post('/signin', controller.signIn)

module.exports = router
