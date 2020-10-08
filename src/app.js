const express = require('express')
const bodyParser = require('body-parser')
require('./db/mongoose')

const bookMark = require('../src/routes/bookmark')
const tag = require('../src/routes/tag')
const display = require('../src/routes/display')
const app = express()


app.use(bodyParser.json())

app.use('/bookmarks', bookMark)
app.use('/tags', tag)
app.use('/display', display)


module.exports = app