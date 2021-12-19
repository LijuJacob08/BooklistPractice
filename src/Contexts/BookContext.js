import React, { useReducer, createContext } from 'react';
import {v4 as uuidv4} from 'uuid';
import { bookReducer } from '../reducers/bookReducer';
export const BookContext= createContext();


const BookContextProvider = (props) => {
    const [books,dispatch]= useReducer(bookReducer,[
        // {title:'name of the wind',author:'patrick rothfuss',id:1},
        // {title:'the final empire',author:'brandon sanderson',id:2},

    ]);
    
    return (  
        <BookContext.Provider value={{books,dispatch}}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;
