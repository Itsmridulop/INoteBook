const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    obj = {title: 'notes module'}
    res.send(obj)
})

module.exports = router