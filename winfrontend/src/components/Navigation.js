import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../css/Navigation.css';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <div id='navMain'>
            //     <div id='navLogo'>WIN Resources</div>
            //     <NavLink className='nav-item' to={{pathname:'/'}}>Home</NavLink>
            //     <NavLink className='nav-item' to={{pathname:'javascript'}}>Javascript</NavLink>
            // </div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className='nav-link' to={{ pathname: '/' }}>Win Resources</NavLink>
                {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
                <button role="button" class="btn-info" data-toggle="collapse" data-target="#demo">
                    Languages
                </button>

                <div id="demo" class="collapse in width">
                    <div>
                        <Link to={{pathname:'/java'}} className='collapseLink'>Java</Link>
                        <Link to={{pathname:'/html'}}>HTML</Link>
                    </div>
                </div>
            </nav>
        )
    }
}



export default Navigation;