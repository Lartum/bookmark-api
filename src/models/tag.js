const mongoose = require('mongoose')
const timeStampOption  = require('../utils/timestamp')
const tagSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    createdAt: Number,
    updatedAt: Number
}, timeStampOption )

const Tag = mongoose.model('Tag', tagSchema)

module.exports = Tag