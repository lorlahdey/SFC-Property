const express = require('express')
const propertyController = require('../controllers/propertyController')
const uploadParser = require('../middleware/multer')

const router = express.Router()

//property routes
router.post('/',  uploadParser, propertyController.createProperty)
router.get('/', propertyController.getAllProperties)
router.get('/:id', propertyController.getOneProperty)
router.patch('/:id', propertyController.updateProperty)

module.exports = router