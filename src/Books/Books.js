import React from 'react';
import Book from '../Book/Book.js';
import './Books.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';



const Books = ({books})=>{
    return(
        <Router>
            <div className="d-flex flex-wrap">
                {books && 
                    books.map((book, index)=>{
                        return(
                        
                            <Book key={index} book={book} />  
                            
                            
                        );
                    })
                }
            </div>
        </Router>
    );
}

export default Books;