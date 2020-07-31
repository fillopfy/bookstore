import React, {useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


function App(){
    const [books, setBooks]=useState(null);
    
    const apiurl='https://www.googleapis.com/books/v1/volumes?filter=free-ebooks&q=a';
    const fetchData = async () =>{
        const response = await axios.get(apiurl);
        setBooks(response.data.items);
    }


    return(
        <>
        <div className="App">
            <h1>Open Book Library</h1>
            <h2>Fetch a list of books and display it</h2>


            {/* --------------------- */}
            {/* |Fetch Data from API|*/}
            {/* --------------------- */}

            <div>
                <button className="fetch-button"
                        onClick={fetchData}
                >
                 Fetch Data   
                </button>
            </div>


            {/* Display data from API */}
            <div className="books">
                {books && 
                    books.map((book, index)=>{
                        const cleanedDate = book.volumeInfo.publishedDate.toString();
                        const authors= (book.volumeInfo.authors)?book.volumeInfo.authors.join(", "):"";
                        const imageurl=book.volumeInfo.imageLinks.thumbnail;

                        return(
                            <div className="book" key={index}>
                                <h3>Book {index+1}</h3>
                                <h2>{book.volumeInfo.title}</h2>
                                <br/><br/>

                                <div className="details">

                                
                                    <img className="image" src={imageurl} alt="thumbnail"/>
                                    


                                    <br/><br/>
                                    <p><strong>Author:</strong>  {authors}</p>
                                    <br/>
                                    <p><strong>Published Date:</strong>  {cleanedDate}</p>
                                    <br/>
                                    <p><strong>Title:</strong>  {book.volumeInfo.title}</p>
                                    <br/>
                                    <p><strong>Subtitle:</strong>  {(book.volumeInfo.subtitle)?book.volumeInfo.subtitle:"Not available"}</p>
                                    <br/>
                                    <br/>
                                    <button className="fetch-button more">See More</button>
                                    <br/>
                                    <br/>
                                    
                                </div>
                            </div>
                        );
                    })
                }
            </div>

            

        </div>


        </>

    );
}

// class App extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             items:[],
//             isLoaded:false
//         }
//     }

//     componentDidMount(){
//         fetch('https://www.googleapis.com/books/v1/volumes?filter=free-ebooks&q=a')
//             .then(res=>res.json())
//             .then(res => {
//                 this.setState({
//                     isLoaded:true,
//                     items:res.items, 
//                 })
//             });
//     }

//     render(){
//         var { isLoaded, items } = this.state;
//         if(!isLoaded){
//             return <div>Loading.....Please Wait!</div>
//         }
//         return(
//             <>
//                 <Heading/>
//                 <Books/>
//                 <ul>
//                     {items.map(item=>(
//                         <li key={item.id}>
//                             {Object.entries(item)}
//                         </li>
//                     ))}
//                 </ul>
//             </>
//         );
//     }
// }


export default App;