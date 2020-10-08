const express = require('express')
const router = new express.Router()
const BookMark = require('../models/bookmark')
const Tag = require('../models/tag')


//Find all the bookmarks
router.get('/bookmarks' , async (req,res) =>{
    try {
        const bookMarks = await BookMark.find({})
        res.status(201).send(bookMarks)
    } catch (error) {
        res.status(500).send()
    }

})


//Find all the tags
router.get('/tags' , async (req,res) =>{
    try {
        const tags = await Tag.find({})
        res.status(201).send(tags)
    } catch (error) {
        res.status(500).send()
    }

})

module.exports = router