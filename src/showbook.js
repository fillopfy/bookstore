import React from 'react';



const Showbook = ({index, book})=>{
    const cleanedDate = book.volumeInfo.publishedDate.toString();
    const authors= (book.volumeInfo.authors)?book.volumeInfo.authors.join(", "):"";
    const imageurl=book.volumeInfo.imageLinks.thumbnail;
    return(


        <div className="card border-dark try">
            <div className="card-header font-header"><h3>{book.volumeInfo.title}</h3></div>
            <img src={imageurl} class="img " alt="thumbnail"/>
            <div className="card-body text-dark d-flex flex-column">
            <h5 className="card-title font">Book ID: {book.id}</h5>
            <p className="card-text font"><strong>Author:</strong>  {authors}</p>
            <p className="card-text font"><strong>Published Year:</strong>  {cleanedDate}</p>
            <p className="card-text font"><strong>Title:</strong>  {book.volumeInfo.title}</p>
            <p className="card-text font"><strong>Subtitle:</strong>  {(book.volumeInfo.subtitle)?book.volumeInfo.subtitle:"Not available"}</p>
            
           
            
            </div>
        </div>
    
    );
}

export default Showbook;