//Q7) Add a frontend route `/library` that will render all the books (title and author) from the database.

import React from "react"
import axios from 'axios'
import { useState } from "react"

export const getAllBooks = ()=>{

    const [books,setBooks]= useState()

    const getAll = (e)=>{
        e.preventDefault()
        axios.get('http://localhost:5000/books').then((result)=>{
            setBooks(result.data)
        })
    }


    return (<>
    <h2>Get all Books</h2>
    {}
    <button onClick={getAll}>get all books</button>
    
    
    
    </>)

}