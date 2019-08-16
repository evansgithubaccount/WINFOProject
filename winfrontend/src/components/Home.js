import React from 'react';
import Navigation from './Navigation';
import LinkUpload from './LinkUpload';
import '../css/LinkUpload.css';

class Home extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className='homePage'>
                <Navigation/>
                <p>Home Page Test</p>
                <LinkUpload/>
            </div>
        )
    }
}

export default Home;