import React, { useState, createContext } from 'react';
import {v4 as uuidv4} from 'uuid';
export const BookContext= createContext();


const BookContextProvider = (props) => {
    const [books,setBooks]= useState([
        {title:'name of the wind',author:'patrick rothfuss',id:1},
        {title:'the final empire',author:'brandon sanderson',id:2},
    ]);
    const addBook =(title,author)=>{
        setBooks([...books,{title ,author,id:uuidv4()}]);
    }
    const removeBook =()=>{}
    return (  
        <BookContext.Provider value={{books,addBook,removeBook}}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;
