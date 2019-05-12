import React from 'react'
import MainLogin from './components/authentication/login'
import MainRegister from './components/authentication/register'
import App from './App'

import { Route, Switch, Redirect } from 'react-router-dom'
import MainScreen from './containers/main';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={"/login"} />
      </Route>
      <Route exact path="/register" component={MainRegister} />
      <Route exact path="/app" component={App} />
      <Route exact path="/login" component={MainLogin} />
      <Route exact path="/home" component={MainScreen} />
      {/* <Route component={Notfound}/> */}
    </Switch>
  )
}