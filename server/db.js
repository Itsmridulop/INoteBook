const mongoose = require('mongoose')
const mongoURI = "mongodb://localhost:27017/"

const connectToMongo = async () => {
    const res = await mongoose.connect(mongoURI)
    console.log("connected to mongo")
}

module.exports = connectToMongo