const express = require('express')
const http = require('http')
const path = require('path')

const router = require('./router')
const api = require('./api')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')   

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', router)
app.use('/api', api)

const server = http.createServer(app)
server.listen(process.env.PORT ?? '8080')
