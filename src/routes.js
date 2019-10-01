import React from 'react'
import MainLogin from './components/authentication/login'
import MainRegister from './components/authentication/register'
import App from './App'

import { Route, Switch } from 'react-router-dom'


export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />

      <Route exact path="/register/:email" component={MainRegister} />
      <Route exact path="/login" component={MainLogin} />

    
      <Route exact path="/kegiatan" component={App}/>
      <Route exact path="/kegiatan/:event_id" component={App} />
      <Route exact path="/kegiatan/:event_id/edit" component={App} />
      <Route exact path="/kegiatan/:event_id/form" component={App} />
      <Route exact path="/kegiatan/:event_id/responses" component={App} />
      <Route exact path="/kegiatan/:event_id/responses/:user_id" component={App} />
      <Route exact path="/profile" component={App} />
      {/* <Route component={Notfound}/> */}
    </Switch>
  )
}