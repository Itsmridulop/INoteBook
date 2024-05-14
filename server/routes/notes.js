const express = require('express')
const router = express.Router()
const fetchUser = require('../middleware/fetchUserData')
const { body, validationResult } = require('express-validator')
const notes = require('../models/Notes')
const user = require('../models/User')
    
// get notes

router.get('/fetchnotes', fetchUser, async (req, res) => {
    const userNotes = await notes.find({user: req.user.id})
    res.send(userNotes)
})

// add notes

router.post('/addnotes',fetchUser, [
    body('title', 'Title cann\'t be empty').exists(),
    body('details', 'Details cann\'t be empty').exists()
], async (req, res) => {
    const error = validationResult(req)
    if(!error.isEmpty()) return res.status(400).send(error)
    try {
        const isUser = await user.findById(req.user.id)
        if(!isUser) return res.status(401).send("Access denied")
        const { title, details } = req.body
        const userNotes = new notes({
            user: req.user.id,
            title: title,
            details: details,
        })
        await userNotes.save()
        res.send("Saved")
    } catch (error) {
        res.status(500).send("Some ERROR occur")
        console.log(error.errmsg)
    }
})

// update notes

router.put('/updatenote/:id',fetchUser, async (req, res) => {
    try {
        const { title, details } = req.body
        const newNotes = {}
        if(title) newNotes.title = title
        if(details) newNotes.details = details
        const exsitingNotes = await notes.findById(req.params.id)
        if(!exsitingNotes) return res.status(404).send("Notes not found.")
        const updatedNotes = await notes.findByIdAndUpdate(req.params.id, {$set: newNotes}, {new: true})
        res.json(updatedNotes)
    } catch (error) {
        res.status(500).send("Some ERROR occur")
        console.log("Routes error: ",error)
    }
})

// delete note

router.delete('/deletenote/:id',fetchUser, async (req, res) => {
    try {
        const isUser = await user.findById(req.user.id)
        // console.log(isUser)
        if(!isUser) return res.status(404).send("User not found")
        const reqUser = await notes.findById(req.params.id)
        console.log(reqUser)
        if(!reqUser) return res.status(404).send("Request not found.")
        await notes.findByIdAndDelete(req.params.id)
    } catch (error) {
        res.status(500).send("Some ERROR occur")
        console.log("Routes error: ",error)
    }
})

module.exports = router