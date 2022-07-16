const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const books = require('./routes/book')
const port = 3000
require('./config/config')

app.use(bodyParser.json())
app.use('/books', books)

app.listen(port, () => {
    console.log(`Server running at ${port}`)
})