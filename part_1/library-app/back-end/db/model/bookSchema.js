const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title : {type:String} , 
    author :{type:String} ,
    pages:{type:Number}, 
    publisher:{type:String}, 
    published_at:{type:Date}
})

const bookModel = mongoose.model('Book' , bookSchema)

module.exports = bookModel