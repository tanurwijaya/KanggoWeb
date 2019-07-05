import React from 'react'
import MainLogin from './components/authentication/login'
import MainRegister from './components/authentication/register'
import App from './App'

import { Route, Switch, Redirect } from 'react-router-dom'
import MainScreen from './containers/main';
import DetailKegiatan from './containers/DetailKegiatan';
import EditKegiatan from './containers/EditKegiatan';
import FormKegiatan from './containers/DetailKegiatan/Form';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/register" component={MainRegister} />
      <Route exact path="/app" component={App} />
      <Route exact path="/login" component={MainLogin} />
      <Route exact path="/home" component={MainScreen} />

      <Route exact path="/dashboard" component={App} />
      <Route exact path="/members" component={App} />
      <Route exact path="/kegiatan" component={App} />
      <Route exact path="/kegiatan/:event_id" component={App} />
      <Route exact path="/kegiatan/:event_id/edit" component={App} />
      <Route exact path="/kegiatan/:event_id/form" component={App} />
      <Route exact path="/profile" component={App} />
      {/* <Route component={Notfound}/> */}
    </Switch>
  )
}