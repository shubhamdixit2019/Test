<<<<<<< HEAD
import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './App.css'

import { RouteInitial } from './fileRouter'

function App () {
=======
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import { RouteInitial } from './fileRouter'

function App() {
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae
  return (
    <Router>
      <div>
        <Header />
        <RouteInitial />
      </div>
    </Router>
<<<<<<< HEAD
  )
}

function Header () {
  return (
    <div id='menu-outer'>
      <div className='table'>
        <ul id='horizontal-list' >
          <li className='App'>
            <Link to='/lists'>List</Link>
=======
  );
}


function Header() {
  return (
    <div id="menu-outer">
      <div className="table">
        <ul id="horizontal-list" >
          <li className="App">
            <Link to="/lists">List</Link>
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae
          </li>
        </ul>
      </div>
    </div>
<<<<<<< HEAD
  )
}

export default App
=======
  );
}

export default App;
>>>>>>> aabd3c4f97563fd4bc4567f020372cbd4a48f6ae
