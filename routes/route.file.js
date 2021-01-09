const router = require('express').Router()
const fileController = require('../controllers/file')
const authmiddleware = require('../middleware/auth.middleware')

router.post('', authmiddleware, fileController.createDir)
router.get('', authmiddleware, fileController.getFiles)

module.exports = router
