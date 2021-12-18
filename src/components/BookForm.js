import React ,{useContext,useState} from 'react';
import { BookContext } from '../Contexts/BookContext';

const NewBookForm = () => {
   const {addBook} =useContext(BookContext);
   const [title,setTitle]= useState('');
   const [author,setAuthor]= useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        addBook(title,author);
        setTitle('');
        setAuthor('');
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type= 'text' required value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <input type= 'text' required value={author} onChange={(e)=>setAuthor(e.target.value)}/>
            <input type='submit' value='Add Book'/> 

        </form>


     );
}
 
export default NewBookForm;