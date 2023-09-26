const express = require('express')
const userController = require('../Controller/UserController')
const router = new express.Router()

router.post('/register', userController.register)

module.exports = router