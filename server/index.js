const connectToMongo = require('./db')
const express = require('express')
const dotenv = require('dotenv');
dotenv.config({path: './config.env'})

// console.log(process.env.PORT)

connectToMongo()
const app = express()
const port = 3000

app.use(express.json())
app.use('/api/auth', require('./routes/auth.js'))
app.use('/api/notes', require('./routes/notes.js'))

app.listen(port, () => {
    console.log(`running at http://localhost:${port}`)
})