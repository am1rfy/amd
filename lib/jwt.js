const jwt = require('jsonwebtoken')
require('dotenv').config()

const generateAccessToken = payload => 
    jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '24h' })

module.exports = generateAccessToken