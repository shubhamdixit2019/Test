import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import MainContainer from './Containers/MainContainer'
import DisplayAPI from './Components/DisplayAPI'

function ABC() {
  return (
    <Router>
      <div>        
        <Header/>     
        <Switch>
          <Route exact path="/" component={MainContainer}/>        
          <Route path="/lists" component={lists}/> 
        </Switch>
      </div>
    </Router>
  );
}

function lists() {
  return <DisplayAPI />;
}

function Header() {
  return (
    <div id="menu-outer">
      <div class="table">
        <ul id="horizontal-list" >      
          <li className="App">
            <Link to="/lists">List</Link>
          </li>      
        </ul>
      </div>
    </div>
  );
}

export default ABC;