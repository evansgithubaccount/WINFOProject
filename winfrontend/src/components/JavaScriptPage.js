import React from 'react';
import Navigation from './Navigation';

class JavaScriptPage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id='javaPage'>
                <Navigation/>
                <b>JavaScript</b>
            </div>
        )
    }
}

export default JavaScriptPage;