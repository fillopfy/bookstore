import React, {useEffect, useState} from 'react';
import Book from '../Book/Book.js';
import './Books.css';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link, Switch, Route} from 'react-router-dom';
import Showbook from '../showbook.js';




const Books = ({books})=>{
    return(
        
            <div className="d-flex flex-wrap">
                {books && 
                    books.map((book)=>{
                        return(
     
                            <Book key={book.id} book={book} />
                            
                        );
                    })
                }
            </div>
        
    );
}



export default Books;