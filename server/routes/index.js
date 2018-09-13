'use strict'

const express = require('express')
const router = express.Router()

const user = require('./userRouter')
const quote = require('./quoteRouter')

router.use('/users', user)
router.use('/quotes', quote)


module.exports = router