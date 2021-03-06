const express = require('express')
const router = new express.Router()
const BookMark = require('../models/bookmark')

//Create a new bookmark
router.post('/' , async (req,res) =>{
    const fieldObject = Object.keys(req.body)
    const fields = ['link', 'title', 'publisher']

    const validFields = fieldObject.every((field) => fields.includes(field))

    if(!validFields){
        return res.status(400).send('Invalid Fields')
    }

    const bookMark = new BookMark(req.body)
    try {
        await bookMark.save()
        res.status(201).send(bookMark)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }

})


//Delete a bookmark by id
router.delete('/' , async (req,res) => {
    try {
        const bookMark = await BookMark.findByIdAndDelete(req.body.bookmarkId)
        if(!bookMark){
           return res.status(404).send('requested bookmark does not exist')
        }

        res.status(200).send(bookMark)
    } catch (error) {
       console.log(error)
       return res.status(400).send(error)
    }
})


module.exports = router
