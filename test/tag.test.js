const request = require('supertest')
const app = require('../src/app')
const Bookmark = require('../src/models/bookmark')
const { setupDatabase } = require('./fixtures/db')

beforeEach( setupDatabase )