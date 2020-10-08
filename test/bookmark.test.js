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
   const newBookmark =await request(app)
            .post('/bookmarks')
            .send({
                link:'www.bing.com',
                title:'Bing search engine',
                publisher:'John Doe'
            })
            .expect(201)
   expect(newBookmark).not.toBeNull()         
})

test('Should Delete a bookmarkOne', async () =>{
        await request(app)
             .delete(`/bookmarks/${bookmarkOneId}`)
             .send()
             .expect(200)              
 })

 
 
