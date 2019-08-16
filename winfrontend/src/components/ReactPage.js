import React from 'react';
import Navigation from './Navigation';

class ReactPage extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className='reactPage'>
                <Navigation/>
                <p>React Page Test</p>
            </div>
        )
    }
}

export default ReactPage;