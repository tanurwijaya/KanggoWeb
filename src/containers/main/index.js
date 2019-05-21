import React, { Component } from 'react'
import KegiatanScreen from './kegiatan';

const TABS = {
  EVENT: 'tab_event',
  SETTINGS: 'tab_settings',
  DASHBOARD: 'tab_dashboard'
}

class MainScreen extends Component {

  state = {

  }

  render() {
    const { history, selected } = this.props
    console.log(this.props)
    if (selected === 'Events') return <KegiatanScreen history={history} />
    else return null
    
  }

}

export default MainScreen