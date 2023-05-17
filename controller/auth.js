const bcrypt = require('bcryptjs')
const User = require('../models/user')
const generateAccessToken = require('../lib/jwt')
const { validationResult } = require('express-validator')

class AuthController {
    async register(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty())
                return res.status(400).json(errors)

            const { username, password } = req.body
            const candidate = await User.findOne({ username })

            if (candidate) {
                return res.status(400).json({ 
                    message: 'that username already taken'
                })                
            }
            const hashedPassword = bcrypt.hashSync(password, 7)
            const user = new User({ username, password: hashedPassword })
            await user.save()
            return res.json({ 
                message: 'user is successfully registered' 
            })
        } 
        catch (e) {
            console.log(e)
            res.status(400).json({ message: 'unknown registration error' })
        }
    }

    async login(req, res) {
        try {
            const { username, password } = req.body
            const user = await User.findOne({ username })

            if (!user) {
                return res.status(400).json({ 
                    message: `user ${ username } not found` 
                })
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword)
                return res.status(400).json({ message: 'invalid password' })

            const token = generateAccessToken({ id: user._id })
            return res.json({ token })
        }
        catch (e) {
            console.log(e)
            res.status(400).json({ message: 'unknown login error' })
        }
    }
}

module.exports = new AuthController()
