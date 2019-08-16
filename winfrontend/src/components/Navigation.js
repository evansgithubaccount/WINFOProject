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
            // <div id='navMain'>
            //     <div id='navLogo'>WIN Resources</div>
            //     <NavLink className='nav-item' to={{pathname:'/'}}>Home</NavLink>
            //     <NavLink className='nav-item' to={{pathname:'javascript'}}>Javascript</NavLink>
            // </div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className='nav-link' to={{pathname:'/'}}>Win Resources</NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <div id="accordion">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link " data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Languages
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show"  aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
        <a>Java</a>
      </div>
    </div>
  </div>
  </div>

      
    </ul>
    
  </div>
</nav>
        )
    }
}



export default Navigation;