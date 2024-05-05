const express = require('express')
const router = express.Router()
const user = require('../models/User')
const { body, validationResult } = require('express-validator')

router.post('/', [
    body('userName', 'User name must comtain atleat 3 character').isAlpha().isLength({min: 3}),
    body('password', 'Password must contain atleast 8 character').isAlphanumeric().isLength({min: 8}),
    body('email', 'Enter a valid user email').isEmail()
] , (req, res) => {
    const error = validationResult(req)
    if(!error.isEmpty()) res.status(400).json({error: error.array()})
    const newUser = new user(req.body)
    newUser.save().then(() => {
        res.json({msg: 'user created successfully'})
    }).catch(error => {
        res.json({msg: "User name or email is allready exist"})
        console.log(error.errmsg)
    })
})

module.exports = router