import React from 'react'
import MainLogin from './components/authentication/login'
import MainRegister from './components/authentication/register'
import App from './App'

import { Route, Switch, Redirect } from 'react-router-dom'
import MainScreen from './containers/main';
import DetailKegiatan from './containers/DetailKegiatan';
import EditKegiatan from './containers/EditKegiatan';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={"/app"} />
      </Route>
      <Route exact path="/register" component={MainRegister} />
      <Route exact path="/app" component={App} />
      <Route exact path="/login" component={MainLogin} />
      <Route exact path="/home" component={MainScreen} />

      <Route exact path="/dashboard" component={App} />
      <Route exact path="/members" component={App} />
      <Route exact path="/events" component={App} />
      <Route exact path="/event/:event_id" component={App} />
      <Route exact path="/event/:event_id/edit" component={EditKegiatan} />
      <Route exact path="/settings" component={App} />
      {/* <Route component={Notfound}/> */}
    </Switch>
  )
}