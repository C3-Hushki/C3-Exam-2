import React from "react"
import { useState } from "react"

export const CreateBook = ()=>{
    const [title , setTitle] = useState()
    const [author , setAuthor] = useState()
    const [pages , setPages] = useState()
    const [publisher , setPublisher] = useState()
    const [published_at , setPublished_at] = useState()

    const createBook = (e)=>{
        e.preventDefault()
        const newBook = {
            title,
            author,
            pages,
            publisher,
            published_at
        }
        axios.post('http://localhost:5000/books',newBook).then((res)=>{
            
        })
    }


    return (<>
    <input type='text' placeholder='title' onChange={(e)=>{
        setTitle(e.target.value)
    }}></input>
    <input type='text' placeholder='author' onChange={(e)=>{
        setAuthor(e.target.value)
    }}></input>
    <input type='numer' placeholder='pages' onChange={(e)=>{
        setPages(e.target.value)
    }}></input>
    <input type='text' placeholder='publisher' onChange={(e)=>{
        setPublisher(e.target.value)
    }}></input>
    <input type='date' placeholder='publishedAt' onChange={(e)=>{
        setPublished_at(e.target.value)
    }}></input>
    <button onClick={createBook}>Submit</button>
    
    
    
    </>)
}