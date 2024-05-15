const dotenv = require('dotenv');
dotenv.config({path: './config.env'})
const connectToMongo = require('./db')
const express = require('express')
const cors = require('cors')

connectToMongo()
const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.use('/api/auth', require('./routes/auth.js'))
app.use('/api/notes', require('./routes/notes.js'))

app.listen(PORT, () => {
    console.log(`running at http://localhost:${PORT}`)
})