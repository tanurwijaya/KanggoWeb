import React, { Component } from 'react'
import KegiatanScreen from './kegiatan';

const REGISTER_PAGE = {
  PASSWORD : 'password_page',
  MAIN: 'main_page',
  ADMIN: 'admin_page'
}

class MainScreen extends Component {

  state = {
    
  }

  render() {
    return(
        <KegiatanScreen/>
    )
  }

}

export default MainScreen