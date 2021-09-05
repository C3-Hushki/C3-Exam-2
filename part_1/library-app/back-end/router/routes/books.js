const express = require('express')

const bookRouter = express.Router()
const {createBook ,getAllBooks , findBookById,deleteBook} = require('../controller/books')


bookRouter.post('/' ,createBook )
bookRouter.get('/' ,getAllBooks )
bookRouter.get('/:book_id' ,findBookById )
bookRouter.delete('/:book_id' ,deleteBook )

module.exports = bookRouter