const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    details: {
        type: String,
        required: true
    },
    tags: {
        type: String,
    },
    creationDate: {
        type: Date,
        required: true
    }  
})

module.exports = mongoose.model('notes', NotesSchema)
