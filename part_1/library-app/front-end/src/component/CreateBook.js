import React from "react"
import { useState } from "react"

export const CreateBook = ()=>{
    const [title , setTitle] = useState()
    const [author , setAuthor] = useState()
    const [pages , setPages] = useState()
    const [publisher , setPublisher] = useState()
    const [publishedAt , setPublishedAt] = useState()


    return (<>
    <input type='text' placeholder='title'></input>
    <input type='text' placeholder='author'></input>
    <input type='numer' placeholder='pages'></input>
    <input type='text' placeholder='publisher'></input>
    <input type='date' placeholder='publishedAt'></input>
    <button>Submit</button>
    
    
    
    </>)
}