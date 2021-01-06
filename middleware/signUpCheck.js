const { check, body } = require('express-validator')
const min = 3
const max = 4
/* there is everything is wrong here
module.exports = function(req, res, next) {
  check('email', 'Uncorrect email').isEmail()
  check('password', `Password must be longer than ${min} and Zhorter than ${max} symbols`).isLength({ min, max })
  next()
}
 */
