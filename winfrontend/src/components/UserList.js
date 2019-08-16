import React from 'react';
import Navigation from './Navigation';
import UserDataService from '../service/UserDataService';

class UserList extends React.Component{
    constructor(props){
        super(props)
        this.refreshUsers = this.refreshUsers.bind(this)
        this.state = {
            allUsers: []
        }
    }

    componentDidMount(){
        this.refreshUsers();
    }

    refreshUsers(){
        UserDataService.retrieveAllUsers()
            .then(
                response => {
                    this.setState({
                        allUsers: response.data
                    })
                }
            )
    }

    render(){
        return(
            <div id='allUsersPage'>
                <Navigation/>
                {this.state.allUsers.map(function(user){
                    return(<div>{user.username}</div>)
                })}
            </div>
        )
    }
}

export default UserList;