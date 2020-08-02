import React from 'react';
import './Book.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Showbook from '../showbook';
import {Link} from 'react-router-dom';



const Book = ({book})=>{
    const cleanedDate = book.volumeInfo.publishedDate.toString();
    const authors= (book.volumeInfo.authors)?book.volumeInfo.authors.join(", "):"";
    const imageurl=book.volumeInfo.imageLinks.thumbnail;
    const title=(book.volumeInfo.title.length)>20?book.volumeInfo.title.substring(0,20)+"...":book.volumeInfo.title
    const subtitle=(book.volumeInfo.subtitle)?((book.volumeInfo.subtitle.length)>30?book.volumeInfo.subtitle.substring(0,30)+"...":book.volumeInfo.subtitle):"Not Available";
    return(

        
        <div className="card border-dark try">
            <div className="card-header font-header"><h3>{title}</h3></div>
            <img src={imageurl} class="img" alt="thumbnail"/>
            <div className="card-body text-dark d-flex flex-column">
            {/* <h5 className="card-title font">Book ID: {book.id}</h5> */}
            <p className="card-text font"><strong>Author:</strong>  {authors}</p>
            {/* <p className="card-text font"><strong>Published Year:</strong>  {cleanedDate}</p> */}
            <p className="card-text font"><strong>Title:</strong>  {title}</p>
            <p className="card-text font"><strong>Subtitle:</strong>  {subtitle}</p>
            
            <Link className="btn btn-primary mt-auto" to={`/bookinfo/${book.id}`} target="_blank">
            <button 
                className="btn btn-primary  mt-auto"
            >

            See More</button></Link>
            
            </div>
        </div>
        
    
    );
}

export default Book;

