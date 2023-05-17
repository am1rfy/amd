const express = require('express')
const router = express.Router()

const routes = [
    {
        name: 'home',
        path: '/',
        handler: (req, res, next) => {
            res.render('home')
        },
    },
    {
        name: 'new_ryzen_presentation',
        path: '/new_ryzen_presentation',
        handler: (req, res, next) => {
            res.render('new_ryzen_presentation')
        },
    },
    {
        name: 'together_we_advance',
        path: '/together_we_advance',
        handler: (req, res, next) => {
            res.render('together_we_advance')
        },
    },
    {
        name: 'login',
        path: '/login',
        handler: (req, res, next) => {
            res.render('login')
        },
    },
    {
        name: 'register',
        path: '/register',
        handler: (req, res, next) => {
            res.render('register')
        },
    },
]

for (const route of routes)
    router.get(route.path, route.handler)

module.exports = router
