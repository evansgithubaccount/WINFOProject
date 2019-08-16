import React from 'react';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';
import '../css/Navigation.css';

class Navigation extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id='navMain'>
                <div id='navLogo'>WIN Resources</div>
                <hr></hr>
                <NavLink className='nav-item' to={{pathname:'/'}}>Home</NavLink>
                <hr></hr>
            </div>
        )
    }
}

export default Navigation;