import React from 'react';
import Navigation from './Navigation';

class Home extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className='homePage'>
                <Navigation/>
                <p>Home Page Test</p>
            </div>
        )
    }
}

export default Home;