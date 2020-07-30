import React from 'react';
import Book from '../Book/Book.js';
import './Books.css';


const Books = ()=>{
    return(
        <div className="whole">
            <div className="row">
                <Book className="book"/>
                <Book className="book"/>
                <Book className="book"/>
                {/* <Book/> */}
            </div>

            <div className="row">
                <Book/>
                <Book/>
                <Book/>
            </div>

            <div className="row">
                <Book/>
                <Book/>
                <Book/>
            </div>

            <div className="row">
                <Book/>
                <Book/>
                <Book/>
            </div>
        </div>
    );
}

export default Books;