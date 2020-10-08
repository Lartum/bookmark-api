const express = require('express')
const router = new express.Router()
const BookMark = require('../models/bookmark')
const { remove } = require('../models/tag')
const Tag = require('../models/tag')

//Create a new tag
router.post('/' , async (req,res) =>{
    const tag = new Tag(req.body)
    try {
        await tag.save()
        res.status(201).send(tag)
    } catch (error) {
        res.status(400).send(error)
    }

})

//Attach Tag to a bookmark
router.put('/' , async ( req,res ) =>{
  try {
     const tag = await Tag.findOne({title: req.body.tagTitle})
     if(!tag){
         return res.status(400).send('The tag does not exist')
     }
    const bookMark = await BookMark.findOneAndUpdate(
         { _id: req.body.bookmarkId }, 
         { $push: { tags: tag._id}},
         { new: true}
         )
    await bookMark.save()
    res.status(200).send(bookMark)
  } catch (error) {
      res.status(400).send(error)
  }
})

//Remove Tag from a bookmark
router.patch('/' , async ( req,res ) =>{
    try {
    const tag = await Tag.findOne({ title: req.body.tagTitle})
    const tagId = tag._id 
    const bookMark = await BookMark.findOneAndUpdate(
            { _id: req.body.bookmarkId },
            { 
                $pull: { 'tags': tagId }
            },
            { 'new': true }
            )
       await bookMark.save()
       res.status(200).send(bookMark)
    } catch (error) {
        res.status(400).send(error)
    }
  })


//Delete a tag
router.delete('/' , async (req,res) =>{
    try {
        const tag = await Tag.findOneAndDelete({ title: req.body.title })
        if(!tag){
            res.status(404).send('requested tag does not exist')
        }

        res.status(200).send(tag)
    } catch (error) {
        res.status(400).send(error)
    }
})


module.exports = router
