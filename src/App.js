import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import MainContainer from './Containers/MainContainer'
import DisplayAPI from './Components/DisplayAPI'

function App() {
  return (
    <Router>
      <div>        
        <MainContainer /> 
        <Header />     
        <Route path="/lists" component={lists} />        
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

export default App;