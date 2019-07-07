import React, { Component } from 'react'
import KegiatanScreen from './kegiatan';
import ProfileScreen from '../Profile'

const TABS = {
  EVENT: 'tab_event',
  SETTINGS: 'tab_settings',
  DASHBOARD: 'tab_dashboard'
}

class MainScreen extends Component {

  render() {
    const { history, selected } = this.props
    if (selected === 'Kegiatan') return <KegiatanScreen history={history} />
    else if(selected === 'Profile') return <ProfileScreen/>    
  }

}

export default MainScreen