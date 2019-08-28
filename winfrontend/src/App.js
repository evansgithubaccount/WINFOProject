import React from 'react';
import { CookiesProvider } from 'react-cookie';
import './App.css';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import Home from './components/Home';
import Error from './components/Error';
import UserList from './components/UserList';
import JavaScriptPage from './components/JavaScriptPage';
import ReactPage from './components/ReactPage';
import JavaPage from './components/JavaPage';
import CSSPage from './components/CSSPage';
import HTMLPage from './components/HTMLPage';
import SQLPage from './components/SQLPage';
import CSharpPage from './components/CSharpPage';
import Login from './components/Auth/Login';
import {notification, Layout} from 'antd';
import UserProfile from './components/UserProfile';
import Navigation from './components/Navigation';
import Signup from './components/Auth/Signup';
import SearchResults from './components/SearchResults'

import {ACCESS_TOKEN} from './constants';

import {getCurrentUser} from './util/APIUtils';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: null,
      isAuthenticated: false,
      isLoading: false
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.loadCurrentUser = this.loadCurrentUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    notification.config({
      placement: 'topRight',
      top: 70,
      duration: 3,
    })
  }

  componentDidMount(){
    this.loadCurrentUser();
  }

  loadCurrentUser(){
    this.setState({
      isLoading: true
    });
    getCurrentUser()
      .then(response => {
        console.log(response);
        this.setState({
          currentUser: response,
          isAuthenticated: false,
          isLoading: false
        });
      }).catch(error => {
        this.setState({
          isLoading: false
        })
        console.log(error);
      })
  }

  handleLogout(redirectTo="/", notificationType="success", description="You're successfully logged out"){
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      currentUser: null,
      isAuthenticated: false
    });

    this.props.history.push(redirectTo);

    notification[notificationType]({
      message: "WINFO App",
      description: description
    })
  }

  handleLogin(){
    notification.success({
      message: 'WINFO App',
      description: "You're successfully logged in"
    });
    this.loadCurrentUser();
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="App">
          <Navigation isAuthenticated={this.state.isAuthenticated}
            currentUser={this.state.currentUser}
            onLogout={this.handleLogout}/>
            <Switch>
              <Route path='/allUsers' component={UserList} />
              <Route exact path='/javascript' component={JavaScriptPage} />
              <Route exact path='/' render={(props)=><Home isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser} handleLogout={this.handleLogout} {...props}/>}></Route>
              <Route exact path='/javascript/react' component={ReactPage} />
              <Route exact path='/java' component={JavaPage} />
              <Route exact path='/css' render={(props)=><CSSPage isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser} handleLogout={this.handleLogout} {...props}/>}></Route>
              <Route exact path='/html' component={HTMLPage} />
              <Route exact path='/sql' component={SQLPage} />
              <Route exact path='/csharp' component={CSharpPage} />
              <Route exact path='/login' render={(props)=><Login isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser} onLogin={this.handleLogin} {...props}/>}></Route>
              <Route exact path='/signup' render={(props)=><Signup isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser} handleLogout={this.handleLogout} {...props}/>}></Route>
              <Route exact path = '/u/:username' render={(props)=><UserProfile isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser} handleLogout={this.handleLogout} {...props}/>}></Route>
              <Route exact path = '/search' render={(props)=><SearchResults isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser} handleLogout={this.handleLogout} {...props}/>}></Route>
              <Route component={Error} />
            </Switch>
      </div>
    );
  }
}

export default withRouter(App);
