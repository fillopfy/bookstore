import React, {Component} from 'react';
import Book from '../Book/Book.js';
import './Books.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';



const Books = ({books})=>{
    return(
        <div className="d-flex flex-wrap">
                {books && 
                    books.map((book, index)=>{
                        return(
                            <Book key={index} book={book} />  
                        );
                    })
                }
            </div>
    );
}

export default Books;