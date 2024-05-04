const connectToMongo = require('./db')
const express = require('express')

connectToMongo()
const app = express()
const port = 3000

console.log(app)

app.use('/api/auth', require('./routes/auth.js'))
// app.use('/api/notes', require('./routes/notes.js'))

app.listen(port, () => {
    console.log(`running at http://localhost:${port}`)
})