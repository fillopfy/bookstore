import React from 'react';
import './Book.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Showbook from '../showbook';


const Book = ({index, book})=>{
    const cleanedDate = book.volumeInfo.publishedDate.toString();
    const authors= (book.volumeInfo.authors)?book.volumeInfo.authors.join(", "):"";
    const imageurl=book.volumeInfo.imageLinks.thumbnail;
    return(

        <Router>
        <div className="card border-dark try">
            <div className="card-header font-header"><h3>{book.volumeInfo.title}</h3></div>
            <img src={imageurl} class="img " alt="thumbnail"/>
            <div className="card-body text-dark d-flex flex-column">
            <h5 className="card-title font">Book ID: {book.id}</h5>
            <p className="card-text font"><strong>Author:</strong>  {authors}</p>
            <p className="card-text font"><strong>Published Year:</strong>  {cleanedDate}</p>
            <p className="card-text font"><strong>Title:</strong>  {book.volumeInfo.title}</p>
            <p className="card-text font"><strong>Subtitle:</strong>  {(book.volumeInfo.subtitle)?book.volumeInfo.subtitle:"Not available"}</p>
            
            <button 
                className="btn btn-primary btn-lg mt-auto"
                onClick={()=>{
                     return <Route path="/bookinfo" component={Showbook}/>
                }}
            >

            See More</button>
            
            </div>
        </div>
        </Router>
    
    );
}

export default Book;

