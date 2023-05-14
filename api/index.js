const express = require('express')
const router = express.Router()

router.post('/subscribe_news', async (req, res) => {
    if (!req.body) 
        return res.sendStatus(400)
    
    res.json({ msg: 'Your communication preferences have been saved' })
})

module.exports = router
