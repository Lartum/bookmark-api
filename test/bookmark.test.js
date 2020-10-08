const request = require('supertest')
const app = require('../src/app')
const Bookmark = require('../src/models/bookmark')
const { 
    setupDatabase, 
    bookmarkOneId, 
    bookmarkOne, 
    bookmarkTwo, 
    bookmarkTwoId,
    tagOneId,
    tagTwoId,
    tagThreeId,
    tagOne,
    tagTwo,
    tagThree
} = require('./fixtures/db')

beforeEach( setupDatabase )

test('Should Create a new bookmark', async () =>{

})
