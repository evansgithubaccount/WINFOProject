import React from 'react';
import AuthenticationService from '../service/AuthenticationService';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            loginFailed: false,
            showSuccessMessage: false
        }
        this.loginClicked = this.loginClicked.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    loginClicked(){
        AuthenticationService
            .executeBasicAuthentication(this.state.username, this.state.password)
            .then(() =>{
                AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            }).catch(() =>{
                this.setState({
                    showSuccessMessage: false,
                    loginFailed: true
                })
                console.log('login failed');
            })
    }

    render(){
        return(
            <div id='loginForm'>
                <h1>Login</h1>
                <div className="loginContainer">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}

export default Login;