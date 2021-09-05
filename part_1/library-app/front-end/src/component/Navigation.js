import React from "react";
import {Link} from 'react-router-dom'

export const Navigation = ()=>{
    return (<>
    
    <Link to='/library/create_book' />
    <Link to='/library' />
    <Link to='/library/:book_id'/>
    
    
    </>)
}