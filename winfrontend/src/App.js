import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
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


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/allUsers' component={UserList}/>
          <Route exact path='/javascript' component={JavaScriptPage}/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/javascript/react' component={ReactPage}/>
          <Route exact path='/java' component={JavaPage}/>
          <Route exact path='/css' component={CSSPage}/>
          <Route exact path='/html' component={HTMLPage}/>
          <Route exact path='/sql' component={SQLPage}/>
          <Route exact path='/csharp' component={CSharpPage}/>
          <Route component={Error}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
