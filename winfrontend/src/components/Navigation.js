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
                <div id='navLogo'><span>WIN Resources</span></div>
                <hr></hr>
                <NavLink className='nav-item' to={{pathname:'/css'}}>CSS</NavLink>
                <NavLink className='nav-item' to={{pathname:'/html'}}>HTML</NavLink>
                <NavLink className='nav-item' to={{pathname:'/javascript'}}>Javascript</NavLink>
                <NavLink className='nav-item' to={{pathname:'/'}}>Home</NavLink>
                <NavLink className='nav-item' to={{pathname:'/java'}}>Java</NavLink>
                <NavLink className='nav-item' to={{pathname:'/sql'}}>SQL</NavLink>
                <NavLink className='nav-item' to={{pathname:'/csharp'}}>C#</NavLink>
                <hr></hr>
            </div>
        )
    }
}



export default Navigation;