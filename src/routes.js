import React from 'react'
import { MessageDisplayer } from './components/message-displayer'
import { Login } from './components/login'
import { Dashboard } from './components/dashboard'
import { Route, IndexRedirect } from 'react-router'

export function getRoutes() {
  return (
    <Route path="/">
      <IndexRedirect to="/login"/>
      <Route component={MessageDisplayer}>
        <Route path="login" component={Login}/>
        <Route path="dashboard" component={Dashboard}/>
      </Route>
    </Route>
  )}