const express = require('express')
const bodyParser = require('body-parser')
require('./db/mongoose')

const bookMark = require('../src/routes/bookmark')
const tag = require('../src/routes/tag')
const display = require('../src/routes/display')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/bookmarks', bookMark)
app.use('/tags', tag)
app.use('/display', display)

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

module.exports = app