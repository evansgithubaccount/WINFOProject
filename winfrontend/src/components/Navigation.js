import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link, withRouter, Redirect } from 'react-router-dom';
import '../css/Navigation.css';
import { Menu, Layout, Dropdown, Icon, Input, Popover, Button } from 'antd';
import ModalUpload from './ModalUpload';


class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.searchRedirect = this.searchRedirect.bind(this);
        this.state = {};
    }

    handleMenuClick({ key }) {
        if (key === 'logout')
            this.props.onLogout();
    }

    searchRedirect(e){
        e.preventDefault();
        const query = document.getElementsByTagName("Input")[0].value;
        const encodedQuery = encodeURIComponent(encodeURIComponent(query));
        this.props.history.push(`/search/?q=${encodedQuery}`);
    }

    render() {
        let menuItems;
        if (this.props.currentUser) {
            menuItems = [
                <Menu.Item className='menuItem'>
                    <ModalUpload/>
                </Menu.Item>,
                <Menu.Item key="/profile" className="profile-menu menuItem" >
                    <ProfileDropdownMenu currentUser={this.props.currentUser} onLogout={this.props.onLogout} />
                </Menu.Item>
            ];
        } else {
            menuItems = [
                <Menu.Item className='menuItem'> 
                    <ModalUpload/>
                </Menu.Item>,
                <Menu.Item key="/login" className='menuItem'>
                    <Link to="/login">Login</Link>
                </Menu.Item>,
                <Menu.Item key="signup" className='menuItem'>
                    <Link to="/signup">Signup</Link>
                </Menu.Item>
            ]
        }

        const uploadContainer = (
            <form>

            </form>
        )

        return (
            // <div id='navMain'>
            //     <div id='navLogo'>WIN Resources</div>
            //     <NavLink className='nav-item' to={{pathname:'/'}}>Home</NavLink>
            //     <NavLink className='nav-item' to={{pathname:'javascript'}}>Javascript</NavLink>
            // </div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className='nav-link navbar-brand' to={{ pathname: '/' }}>
                    <img src='./cfthLogo.png' width='30' height='30' className='d-inline-block align-center' alt=""/>
                    WIN Resources
                </NavLink>
                {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
                <button role="button" className="btn-info" data-toggle="collapse" data-target="#demo">
                    Languages
                </button>

                <div id="demo" className="collapse in width">
                    <div>
                        <Link to={{ pathname: '/css' }} className='collapseLink'>CSS</Link>
                        <Link to={{ pathname: '/html' }} className='collapseLink'>HTML</Link>
                        <Link to={{ pathname: '/javascript' }} className='collapseLink'>JavaScript</Link>
                        <Link to={{ pathname: '/java' }} className='collapseLink'>Java</Link>
                        <Link to={{ pathname: '/sql' }} className='collapseLink'>SQL</Link>
                    </div>
                </div>
                <Input id='searchBar' name='searchBar' placeholder="Search for posts" enterButton onSearch={this.searchRedirect} onPressEnter={this.searchRedirect}/>
                <Menu
                    className="app-menu"
                    mode="inline"
                    selectedKeys={[this.props.location.pathname]}
                    style={{ lineHeight: '60px' }} >
                    {menuItems}
                </Menu>
            </nav>
        )
    }
}

function ProfileDropdownMenu(props) {

    const dropdownMenu = (
        <Menu className="profile-dropdown-menu">
            <Menu.Item key="user-info" className="dropdown-item menuItem" disabled>
                <div className="username-info">
                    {props.currentUser.username}
                </div>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="profile" className="dropdown-item menuItem">
                <Link to={`/users/${props.currentUser.username}`}>Profile</Link>
            </Menu.Item>
            <Menu.Item key="logout" className="dropdown-item" onClick={props.onLogout}>
                Logout
        </Menu.Item>
        </Menu>
    );

    const bootDrop = (
        <div className='dropdown'>
            <button className='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                {props.currentUser.username}
            </button>
            <div className='dropdown-menu dropdown-menu-right' aria-labelledby='dropdownMenuButton'>
                <Link className='dropdown-item bootDrop' to={`/users/${props.currentUser.username}`}>Profile</Link>
                <Link onClick={props.onLogout} className='dropdown-item bootDrop'>Logout</Link>
            </div>
        </div>
    )

    return (
        <span>
            {bootDrop}
        </span>
    );
}

export default withRouter(Navigation);