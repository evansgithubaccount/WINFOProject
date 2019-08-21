import React from 'react';
import { CookiesProvider } from 'react-cookie';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
import Login from './components/Login';
import {notification, Layout} from 'antd';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: null,
      isAuthenticated: false,
      isLoading: false
    }
    // this.handleLogout = this.handleLogout.bind(this);
    // this.loadCurrentUser = this.loadCurrentUser.bind(this);
    // this.handleLogin = this.handleLogin.bind(this);

    notification.config({
      placement: 'topRight',
      top: 70,
      duration: 3,
    })
  }

  // loadCurrentUser(){
  //   this.setState({
  //     isLoading: true
  //   });
  //   getCurrentUser()
  //     .then(response => {
  //       this.setState({
  //         currentUser: response,
  //         isAuthenticated: false,
  //         isLoading: false
  //       });
  //     }).catch(error => {
  //       this.setState({
  //         isLoading: false
  //       })
  //       console.log(error);
  //     })
  // }

  render() {
    return (
      <div className="App">
        <CookiesProvider>
          <BrowserRouter>
            <Switch>
              <Route path='/allUsers' component={UserList} />
              <Route exact path='/javascript' component={JavaScriptPage} />
              <Route exact path='/' component={Home} />
              <Route exact path='/javascript/react' component={ReactPage} />
              <Route exact path='/java' component={JavaPage} />
              <Route exact path='/css' component={CSSPage} />
              <Route exact path='/html' component={HTMLPage} />
              <Route exact path='/sql' component={SQLPage} />
              <Route exact path='/csharp' component={CSharpPage} />
              <Route exact path='/login' component={Login} />
              <Route component={Error} />
            </Switch>
          </BrowserRouter>
        </CookiesProvider>
      </div>
    );
  }
}

export default App;
