const express = require('express')
const mongoose = require('mongoose')
const http = require('http')
const path = require('path')
require('dotenv').config()

const router = require('./router')
const authRouter = require('./api/auth')
const feedbackRouter = require('./api/feedback')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')   

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', router)
app.use('/api/auth', authRouter)
app.use('/api/feedback', feedbackRouter)

const start = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${ process.env.DB_USERNAME }:${ process.env.DB_PASSWORD }@amd.dqpyoyj.mongodb.net/?retryWrites=true&w=majority`
        )
        http.createServer(app).listen(process.env.PORT ?? '8080')
    } 
    catch (e) {
        console.log(e)
    }
}

start()
