const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: [8, 'password must be greater than 8']
    },
    date: {
        type: Date,
        default: Date.now
    }  
})

module.exports = mongoose.model('user', UserSchema)