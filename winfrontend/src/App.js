import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Error from './components/Error';
import UserList from './components/UserList';
import JavaScriptPage from './components/JavaScriptPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/allUsers' component={UserList}/>
          <Route exact path='/javascript' component={JavaScriptPage}/>
          <Route exact path='/' component={Home}/>
          <Route component={Error}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
