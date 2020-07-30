import React, {Component} from 'react';
import Heading from './Heading/Heading.js';
import Books from './Books/Books.js';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            items:[],
            isLoaded:false
        }
    }

    componentDidMount(){
        fetch('https://www.googleapis.com/books/v1/volumes?filter=free-ebooks&q=a')
            .then(res=>res.json())
            .then(res => {
                this.setState({
                    isLoaded:true,
                    items:res.items, 
                })
            });
    }

    render(){
        var { isLoaded, items } = this.state;
        if(!isLoaded){
            return <div>Loading.....Please Wait!</div>
        }
        return(
            <>
                <Heading/>
                <Books/>
                <ul>
                    {items.map(item=>(
                        <li key={item.id}>
                            {item.volumeInfo.title}
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}


export default App;