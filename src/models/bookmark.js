const mongoose = require('mongoose')
const timeStampOption  = require('../utils/timestamp')
const bookmarkSchema = mongoose.Schema({
    link:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    title:{
        type: String,
        required: true   
    },
    publisher:{
        type:String,
        required:true
    },
    tags:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Tag'
    }],
    createdAt: Number,
    updatedAt: Number,
}, timeStampOption)


const BookMark = mongoose.model('Bookmark', bookmarkSchema)

module.exports = BookMark