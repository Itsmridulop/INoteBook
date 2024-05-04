const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    obj = {title: 'auth module'}
    res.send(obj)
})

module.exports = router