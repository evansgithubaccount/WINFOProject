import React from 'react';

import Navigation from './Navigation';
import LinkUpload from './LinkUpload';
import '../css/LinkUpload.css';
import {Link} from 'react-router-dom';
import {withCookies} from 'react-cookie';

const API_URL = 'http://localhost:8080/api/user';

class Home extends React.Component {
    constructor(props) {
        super(props);
        const { cookies } = props;
        this.state = {
            currentUser: null,
            isLoading: true,
            isAuthenticated: false,
            user: undefined,
            csrfToken: cookies.get("XSRF-TOKEN")
        }
    }

    render() {
        const message = this.state.user ?
            <h2>Welcome, {this.state.user.name}!</h2> :
            <p>Log In to Upload Links</p>;

        const logButton = this.state.isAuthenticated ?
            <div>
                <button color="link"><Link to="/groups">Things</Link></button>
                <br />
                <button color="link" onClick={this.logout}>Logout</button>
            </div> :
            <button color="primary" onClick={this.login}>Login</button>;

        return (
            <div className='homePage'>
                <container fluid>
                    {message}
                    {logButton}
                </container>
                <Navigation />
                <p>Home Page Test</p>
                <LinkUpload />
            </div>
        )
    }
}

export default withCookies(Home)