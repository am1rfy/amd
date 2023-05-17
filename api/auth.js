const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const controller = require('../controller/auth')

router.post('/register', [
    check('username', 'the username cannot be empty').notEmpty(),
    check('password', 'password is too short').isLength({ min: 4 })
], controller.register)

router.post('/login', controller.login)

module.exports = router
