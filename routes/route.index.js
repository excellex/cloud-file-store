const router = require('express').Router()
const path = require('path')


router.get('/', (req, res) => {
  // res.status(200)
  res.sendFile(path.join(__dirname, '..', 'public', 'build', '1index.html'))
})

module.exports = router
