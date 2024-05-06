const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    details: {
        type: String,
        required: true,
        unique: true
    },
    tags: {
        type: String,
    },
    creationDate: {
        type: Date,
        default: Date.now
    }  
})

module.exports = mongoose.model('notes', NotesSchema)
