const express = require('express')
const router = express.Router()
const user = require('../models/User')
const bcrypt = require('bcryptjs')
const { body, validationResult } = require('express-validator')
const jwtSecret = "hjbfdsbchjbsdhbchjssacscsxcsdd"
const jwt = require('jsonwebtoken')

// create a user(signup module)

router.post('/signup', [
    body('userName', 'User name must comtain atleat 3 character').isAlpha().isLength({min: 3}),
    body('password', 'Password must contain atleast 8 character').isAlphanumeric().isLength({min: 8}),
    body('email', 'Enter a valid user email').isEmail()
] , async (req, res) => {
    const error = validationResult(req)
    if(!error.isEmpty()) return res.status(400).json({error: error.array()})
    try {
        const existingUser = await user.findOne({userName: req.body.userName})
        if(existingUser) return res.status(400).json({message: "User allready exist"})
        const existingEmail = await user.findOne({email: req.body.email})
        if(existingEmail) return res.status(400).json({message: "E-mail allready taken"})
        const salt = await bcrypt.genSalt(10)
        const hashedPass =  await bcrypt.hash(req.body.password, salt)
        req.body.password = hashedPass
        const newUser = new user(req.body)
        await newUser.save()
        console.log(newUser.id)
        const data = {
            user: {
                id: newUser.id
            }
        }
        const authToken = jwt.sign(data, jwtSecret)
        res.json({authToken})
    }
    catch (error) {
        res.status(500).send("Some ERROR occur")
        console.log(error)
    }
})

// create a user(signup module)

router.post('/login', [
    body('email', 'Enter a valid user email').isEmail(),
    body('password', 'Password canno\'t be blank').exists()
] , async (req, res) => {
    const error = validationResult(req)
    if(!error.isEmpty()) res.status(400).json({error: error.array()})
    const {email, password} = req.body
    try{   
        let existingUser = await user.findOne({email})
        // console.log(existingUser)
        if(!existingUser) return res.status(400).send("Invalid credentails are worng.")
        const passwordCompare = await bcrypt.compare(password, existingUser.password)
        if(!passwordCompare) return res.status(400).send("Invalid credentials")
        const data = {
            user: {
                id: existingUser.id
            }
        }
        const authToken = jwt.sign(data, jwtSecret)
        res.json({authToken})
        
    } catch (error) {
        res.status(500).send("Some ERROR occur")
        console.log(error)
    }
})

module.exports = router