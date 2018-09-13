'use strict'

const express = require('express')
const router = express.Router()
const quoteController = require('./../controllers/quoteController')

router.post('/', quoteController.createNew)
router.get('/', quoteController.findAll)
router.delete('/:id', quoteController.deleteOne)


module.exports = router