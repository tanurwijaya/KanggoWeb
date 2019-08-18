import React, { Component } from 'react'
import KegiatanScreen from './kegiatan';
import ProfileScreen from '../Profile'

class MainScreen extends Component {

  render() {
    const { history, selected } = this.props
    if (selected === 'Kegiatan') return <KegiatanScreen history={history} />
    else if(selected === 'Profile') return <ProfileScreen/>    
  }

}

export default MainScreen