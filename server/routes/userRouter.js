'use strict'

require('dotenv').config()
const express = require('express')
const router = express.Router()
const userController = require('./../controllers/userController')
const isLogin = require('../middlewares/isLogin')

router.post('/register', userController.register)
router.post('/login', userController.login)

module.exports = router