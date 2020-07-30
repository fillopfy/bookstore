import React from 'react';
import './Heading.css';

const Heading = ()=>{
    return(
        <header>
            <div className="header-part">
            
            <i className="fa fa-book fa-2x"></i>
            </div>
            
            <div className="header-part">
            <h1>Open Boook Store</h1>
            </div>
        </header>
    );
}

export default Heading;