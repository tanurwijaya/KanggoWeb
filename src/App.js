import React, { Component } from 'react';
import { ViewWrapper, SidebarItem, LogoutButton } from './presentationals';
import Text from './presentationals/Text'
import MainScreen from './containers/main'
import { Redirect } from 'react-router-dom'
import KanggoLogo from './assets/images/kanggo_white.png'
import { faChalkboard, faUser } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const listItem = [{label:'Kegiatan',icon:faChalkboard},{label:'Profile',icon:faUser}]
class App extends Component {

  handleLogout = async() => {
    await localStorage.clear()
    console.log(this.props)
    this.props.history.replace('/')
  }

  render() {
    const { history } = this.props
    if(!localStorage.getItem('userid')){
      return <Redirect to="/login"></Redirect>
    }
    return (
      <ViewWrapper style={{ display: 'flex', flex: 1, height: '100%' }} plain flex={1} row>
        <div style={{ display: 'flex', flexDirection: 'column', background: 'black', height: '100%', paddingBottom: 32 }}>

          <SidebarHeader/>
          <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
            {listItem.map((item) =>
              <SidebarItem onClick={()=>this.onSidebarItemPressed(item)} selected={item.label === this.getSelectedTab()}>
                <FontAwesomeIcon style={{ height: 32, width: 32, color: item.label === this.getSelectedTab() ? 'black' : 'white', marginRight: 16 }} icon={item.icon} />
                <Text color={item.label === this.getSelectedTab() ? 'black' : 'white'}>{item.label}</Text>
              </SidebarItem>

            )}
          </div>

          <div style={{bottom: 0, alignSelf:'center',width:'100%', display:'flex',flexDirection:'column'}}>
            <LogoutButton onClick={()=>this.handleLogout()}>
              <Text center style={{display:'flex',flex:1, justifyContent:'center'}} color={'#FF6961'}>Logout</Text>
              </LogoutButton>
            <Text center color={'#FFF'}>versi 1.0</Text>
            </div>
        </div>


        <div style={{ flex: 1, overflowY:'scroll' }}>
          <MainScreen
          selected={this.getSelectedTab()}
          history={history} />
        </div>

      </ViewWrapper>
    )
  }

  getSelectedTab() {
    const { url } = this.props.match
    if (url.includes('kegiatan')) return 'Kegiatan'
    if (url.includes('kegiatan')) return 'Kegiatan'
    if (url.includes('kegiatan')) return 'Kegiatan'
    else if (url.includes('profile')) return 'Profile'
    else return 'Kegiatan'
  }

  onSidebarItemPressed = (item) => {
    const {history} = this.props
    history.push('/'+item.label.toLowerCase())
  }
}

const SidebarHeader = ({ image, name }) => {
  return (
    <div style={{ background: 'black', display: 'flex', flexDirection: 'row', padding: 24, alignItems: 'center', maxWidth: 280 }}>
      <img style={{ width: "70%" }} src={KanggoLogo} alt="logo" />
    </div>
  )
}

export default withRouter(App);
