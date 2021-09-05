//Q7) Add a frontend route `/library` that will render all the books (title and author) from the database.

import React from "react"
import axios from 'axios'
import { useState } from "react"
import { deleteBook } from "../../../back-end/router/controller/books"

export const getAllBooks = ()=>{

    const [books,setBooks]= useState()

    const getAll = (e)=>{
        e.preventDefault()
        axios.get('http://localhost:5000/books').then((result)=>{
            setBooks(result.data)
        })
    }

    const deleteBook = (id)=>{
        
        axios.delete('http://localhost:5000/books/:book_id').then((result)=>{
            setBooks(result.data)
            getAll()
        })
    }


    return (<>
    <h2>Get all Books</h2>
    {somethingIForgot.map((elm)=>{
        return (<>
        <h3>{elm.title}</h3>
        <h3>{elm.author}</h3>
        <button onClick={deleteBook(elm._id)}>Delete</button>
        
        
        </>)
    })}
    <button onClick={getAll}>get all books</button>
    
    
    
    </>)

}