const bookModel = require('../../db/model/bookSchema')

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

//Q3) Create an API `/books` to get all the books from the database.

const getAllBooks = (req,res)=>{
    bookModel.find({}).then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{
        res.status(404).json('server error')
    })
}


//Q4) Create an API `/books/:book_id` to get a specific book from the database.

const findBookById = (req,res)=>{
    bookModel.findOne({_id:req.params.book_id}).then((result)=>{
        res.status(200).json({success : true , result : result})
    }).catch((err)=>{
        res.status(200).json({success : true , message : 'server error'})
    })
}

//Q5) Create an API `/books/:book_id` to delete a specific book from the database

const deleteBook = (req,res)=>{
    const id = req.params.book_id
    bookModel.findOneAndDelete({_id:id} , (err,data)=>{
        if(err){
            console.log(err)
        }
        if(data){
            console.log(data)
        }
    }).then((result)=>{
        res.status(200).json({success:true , message:`artice with id ${id} deleted`})
    }).catch((err)=>{
        res.status(404).json("server error")
    })
}


module.exports = {createBook ,getAllBooks,findBookById,deleteBook}