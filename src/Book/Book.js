import React from 'react';
import './Book.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Book = ({index, book})=>{
    const cleanedDate = book.volumeInfo.publishedDate.toString();
    const authors= (book.volumeInfo.authors)?book.volumeInfo.authors.join(", "):"";
    const imageurl=book.volumeInfo.imageLinks.thumbnail;
    return(


        <div className="card border-dark try">
            <div className="card-header"><h3>{book.volumeInfo.title}</h3></div>
            <img src={imageurl} class="img " alt="thumbnail"/>
            <div className="card-body text-dark d-flex flex-column">
            <h5 className="card-title">Book ID: {book.id}</h5>
            <p className="card-text"><strong>Author:</strong>  {authors}</p>
            <p className="card-text"><strong>Published Date:</strong>  {cleanedDate}</p>
            <p className="card-text"><strong>Title:</strong>  {book.volumeInfo.title}</p>
            <p className="card-text"><strong>Subtitle:</strong>  {(book.volumeInfo.subtitle)?book.volumeInfo.subtitle:"Not available"}</p>
            
            <button className="btn btn-primary btn-lg mt-auto">See More</button>
            
            </div>
        </div>
    
    );
}

export default Book;

