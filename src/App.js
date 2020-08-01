import React, {useState} from 'react';
import axios from 'axios';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Heading from './Heading/Heading';
import Books from './Books/Books';


function App(){
    const [books, setBooks]=useState(null);
    
    const apiurl='https://www.googleapis.com/books/v1/volumes?filter=free-ebooks&q=a';
    const fetchData = async () =>{
        const response = await axios.get(apiurl);
        setBooks(response.data.items);
    }


    
    return(
        
        <div className="App text-center">

            <Heading fetchData={fetchData}/>

            <Books books={books}/>

        </div>
    );
}

export default App;