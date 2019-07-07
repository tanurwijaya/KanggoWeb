import React, { Component } from 'react';
import { ViewWrapper, SidebarItem } from './presentationals';
import Text from './presentationals/Text'
import MainScreen from './containers/main'
import { Redirect } from 'react-router-dom'
import KanggoLogo from './assets/images/kanggo_white.png'

const listItem = ['Kegiatan', 'Profile']
class App extends Component {

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
              <SidebarItem onClick={()=>this.onSidebarItemPressed(item)} selected={item === this.getSelectedTab()}>
                <div style={{ height: 32, width: 32, background: item === this.getSelectedTab() ? 'black' : 'white', marginRight: 16 }}></div>
                <Text color={item === this.getSelectedTab() ? 'black' : 'white'}>{item}</Text>
              </SidebarItem>

            )}
          </div>

          <div style={{bottom: 0, alignSelf:'center',display:'flex',flexDirection:'column'}}>
            <div style={{borderTop:'1px solid #FF6961', borderBottom:'1px solid #FF6961',display:'flex',flex:1,padding:8, marginBottom:32}}>
              <Text style={{display:'flex',flex:1}} color={'#FF6961'}>Logout</Text>
            </div>
            <Text color={'#FFF'}>versi 1.0</Text>
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
    history.push('/'+item.toLowerCase())
  }
}

const SidebarHeader = ({ image, name }) => {
  return (
    <div style={{ background: 'black', display: 'flex', flexDirection: 'row', padding: 24, alignItems: 'center', maxWidth: 280 }}>
      <img style={{ width: "70%" }} src={KanggoLogo} alt="logo" />
    </div>
  )
}

export default App;
