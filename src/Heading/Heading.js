import React from 'react';
import './Heading.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Heading = ({fetchData})=>{
    return(
        <header>
            <h1>Open Book Library</h1>
            <h2>Fetch a list of books and display it</h2>
            <div>
                <button className="btn btn-success btn-lg mb-5"
                        onClick={fetchData}
                >
                 Fetch Books   
                </button>
            </div>
        </header>
    );
}

export default Heading;