import React from 'react';
import {withRouter} from 'react-router-dom';

class Error extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className='errorPage'>
                <p>Error Page Test</p>
            </div>
        )
    }
}

export default withRouter(Error);