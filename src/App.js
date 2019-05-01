import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './App.css'

import { RouteInitial } from './fileRouter'

function App () {
  return (
    <Router>
      <div>
        <Header />
        <RouteInitial />
      </div>
    </Router>
  )
}

function Header () {
  return (
    <div id='menu-outer'>
      <div className='table'>
        <ul id='horizontal-list' >
          <li className='App'>
            <Link to='/lists'>List</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App