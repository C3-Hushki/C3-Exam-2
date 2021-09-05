const express = require('express')

const bookRouter = express.Router()
const {createBook ,getAllBooks} = require('../controller/books')


bookRouter.post('/' ,createBook )
bookRouter.get('/' ,getAllBooks )

module.exports = bookRouter