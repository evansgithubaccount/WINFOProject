import React from 'react';

import Navigation from './Navigation';
import LinkUpload from './LinkUpload';
import '../css/LinkUpload.css';
import {Link, withRouter} from 'react-router-dom';
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
            // csrfToken: cookies.get("XSRF-TOKEN")
        }
    }

    render() {

        return (
            <div className='homePage'>
                <p>Home Page Test</p>
                <LinkUpload />
            </div>
        )
    }
}

export default withRouter(Home)