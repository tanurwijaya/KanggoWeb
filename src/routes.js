import React from 'react'
import MainLogin from './components/authentication/login'
import MainRegister from './components/authentication/register'

import { Route, Switch, Redirect } from 'react-router-dom'

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={"/login"} />
      </Route>
      <Route exact path="/register" component={MainRegister} />
      <Route exact path="/login" component={MainLogin} />
      {/* <Route component={Notfound}/> */}
    </Switch>
  )
}