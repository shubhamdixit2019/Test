import { Route } from 'react-router-dom'
import React from 'react'
import MainContainer from './Containers/MainContainer'
import DisplayAPI from './Components/DisplayAPI'
import { Switch } from 'react-router'
import './App.css'

export function RouteInitial () {
  return (
    <Switch>
      <Route exact path='/' component={MainContainer} />
      <Route path='/lists' component={lists} />
    </Switch>
  )
}

function lists () {
  return <DisplayAPI />
}
