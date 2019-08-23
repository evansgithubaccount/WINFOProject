import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';



class JavaPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id='javaPage'>
                <div class="row">
                    {/*<div class="col-sm-2" id="sideBar">*/}
                    <div>
                        <ul class="nav subNav justify-content-md-center">
                            <li class="nav-item">
                                <Link class="nav-link navText" to={{ pathname: '/javascript/react' }}>React</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link navText" to={{ pathname: '/javascript/react' }}>React</Link>                            </li>
                            <li class="nav-item">
                                <Link class="nav-link navText" to={{ pathname: '/javascript/react' }}>React</Link>                            </li>
                            <li class="nav-item">
                                <Link class="nav-link navText" to={{ pathname: '/javascript/react' }}>React</Link>                            </li>
                        </ul>
                    </div>

                    {/*</div>*/}
                    <div class="row justify-content-md-center">
                    <div class="col-sm-3 stuff">
                    <div class="card">
                        <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        </div>
                       
                    </div>
                    
                    
                    <div class="col-sm-3 stuff">
                    <div class="card">
                        <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        </div>
                       
                    </div>
                    <div class="col-sm-3 stuff">
                    <div class="card">
                        <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        </div>
                       
                    </div>

                    
                    
                </div>
            </div>

        )
    }
}

export default withRouter(JavaPage);