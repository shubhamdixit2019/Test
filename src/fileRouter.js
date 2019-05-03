import { Route } from 'react-router-dom'
import React from 'react'
import MainContainer from './Containers/MainContainer'
import DisplayAPI from './Components/DisplayAPI'
import { Switch } from 'react-router'
import UserList from './Components/UserList'
import CreateUser from './Components/CreateUser'
import './App.css'

export function RouteInitial () {
  return (
    <Switch>
      <Route exact path='/' component={MainContainer} />
      <Route path='/lists' component={lists} />
      <Route path='/user-list' component={userList} />
      <Route path='/create-user' component={createUser} />
    </Switch>
  )
}

function userList () {
  return <UserList />
}

function createUser () {
  return <CreateUser />
}

function lists () {
  return <DisplayAPI />
}