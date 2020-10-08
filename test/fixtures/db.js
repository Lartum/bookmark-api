const mongoose  = require('mongoose')
const BookMark = require('../../src/models/bookmark')
const Tag = require('../../src/models/tag')

const bookmarkOneId = new mongoose.Types.ObjectId
const bookmarkTwoId = new mongoose.Types.ObjectId
const tagOneId = new mongoose.Types.ObjectId
const tagTwoId = new mongoose.Types.ObjectId
const tagThreeId = new mongoose.Types.ObjectId

const tagOne = {
    _id: tagOneId,
    title: 'searchEngine',
}

const tagTwo = {
    _id: tagOneId,
    title: 'searchEngine',
}
const tagThree = {
    _id: tagOneId,
    title: 'searchEngine',
}


const bookmarkOne = {
    _id:bookmarkOneId,
    title:'google',
    link: 'www.google.com',
    publisher: 'lartum',
    tags:[
        tagOneId,
        tagTwoId,
        tagThreeId
    ] 
}

const bookmarkTwo = {
    _id:bookmarkTwoId,
    title:'github',
    link: 'www.github.com',
    publisher: 'lartum',
    tags:[
        tagOneId,
        tagThreeId
    ] 
}




const setupDatabase = async() =>{
    await BookMark.deleteMany()
    await Tag.deleteMany()
    await tagOne.save()
    await tagTwo.save()
    await tagThree.save()
    await bookmarkOne.save()
    await bookmarkTwo.save()
}

module.exports = {
    setupDatabase,
    bookmarkOneId,
    bookmarkTwoId,
    bookmarkOne,
    bookmarkTwo,
    tagOneId,
    tagTwoId,
    tagThreeId,
    tagOne,
    tagTwo,
    tagThree
}
