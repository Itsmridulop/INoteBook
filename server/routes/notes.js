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

router.get('/addnotes',fetchUser, [
    body('title', 'Title cann\'t be empty').exists(),
    body('details', 'Details cann\'t be empty').exists()
], async (req, res) => {
    const error = validationResult(req)
    if(!error.isEmpty()) return res.status(400).send(error)
    try {
        const isUser = await user.findById(req.user.id)
        if(!isUser) return res.status(401).send("Access denied")
        const { title, details, tags } = req.body
        const userNotes = new notes({
            user: req.user.id,
            title: title,
            details: details,
            tags: tags
        })
        await userNotes.save()
        res.send("Saved")
    } catch (error) {
        res.status(500).send("Some ERROR occur")
        console.log(error.errmsg)
    }
})

// update notes


// TODO: get id of notes which has to be updated or deleted from user

router.put('/updatenote',fetchUser, async (req, res) => {
    try {
        const { title, details, tags } = req.body
        const newNotes = {}
        if(title) newNotes.title = title
        if(details) newNotes.details = details
        if(tags) newNotes.tags = tags
        const exsitingNotes = await notes.findOne({user: req.user.id})
        if(!exsitingNotes) return res.status(404).send("Notes not found.")
        const updatedNotes = await notes.findByIdAndUpdate(exsitingNotes.id, {$set: newNotes}, {new: true})
        res.json(updatedNotes)
    } catch (error) {
        res.status(500).send("Some ERROR occur")
        console.log("Routes error: ",error)
    }
})

// delete note

router.delete('/deletenote',fetchUser, async (req, res) => {
    try {
        const isUser = await user.findById(req.user.id)
        if(!isUser) return res.status(404).send("User not found")
        const reqUser = await notes.findOne({user: req.user.id})
        if(!reqUser) return res.status(404).send("Request not found.")
        await notes.findByIdAndDelete(reqUser.id)
    } catch (error) {
        res.status(500).send("Some ERROR occur")
        console.log("Routes error: ",error)
    }
})

module.exports = router