/*

PART 1 [Full-Stack Application]: 

Solve the following questions in the `library-app` folder

Q1) Connect the server to a database.

Q2) Create an API `/books` to insert a new book to the database, it should have (title , author, pages, publisher, published_at)

Q3) Create an API `/books` to get all the books from the database.

Q4) Create an API `/books/:book_id` to get a specific book from the database.

Q5) Create an API `/books/:book_id` to delete a specific book from the database

Q6) Add a frontend route `/library/create_book` to render the inputs that correspond to the book's attributes and a `submit` button (without functionality).

Q7) Add a frontend route `/library` that will render all the books (title and author) from the database.

Q8) Add a frontend route `/library/:book_id` that will render a specific book details from the database.

Q9) When the `submit` button is clicked (from Q6) it should add a new book in the database, by sending a request to the correct endpoint in the backend.

Q10) When rendering the book list (from Q7) add a delete button next to each book, that when clicked will delete the corresponding book from the database and the state.

*/





// Q1) Connect the server to a database. 
const mongoose = require('mongoose')
const options = {
    useUrlParser:true,
    useCreateIndex:true,
    useUifiedIndex:true
}
mongoose.connect('mongodb://localhost:27017/Omar_Hushki', options ,(res)=>{
    console.log('....Connected')
},(err)=>{
    console.log(err)
} )




//Q2) Create an API `/books` to insert a new book to the database, it should have (title , author, pages, publisher, published_at)

//bookSchema
const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title : {type:String} , 
    author :{type:String} ,
    pages:{type:Number}, 
    publisher:{type:String}, 
    published_at:{type:Date}
})

const bookModel = mongoose.model('Book' , bookSchema)

//controller
const createBook = (req,res)=>{
    const {title , author, pages, publisher, published_at} = req.body

    const newBook = new bookModel({
        title , 
        author, 
        pages, 
        publisher, 
        published_at
    })

    newBook.save().then((result)=>{
        res.status(200).json({success:true , message:'Book Created'})
    }).catch((err)=>{
        res.status(200).json({success:false , message:'server error'})
    })
}
