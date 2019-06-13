import React, { Component } from 'react';
import logo from './logo.svg';
import RunningProgram from './components/widget/RunningProgram';
import { ViewWrapper, SidebarItem } from './presentationals';
import Text from './presentationals/Text'
import MainScreen from './containers/main'

const listItem = ['Dashboard', 'Members', 'Events', 'Settings']
class App extends Component {
  render() {
    const { history } = this.props
    return (
      <ViewWrapper style={{ display: 'flex', flex: 1, height: '100%' }} plain flex={1} row>
        <div style={{ display: 'flex', flexDirection: 'column', background: 'black', height: '100%' }}>
          <SidebarHeader name={'1000 Guru Tangsel'} />
          <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
            {listItem.map((item) =>
              <SidebarItem onClick={()=>this.onSidebarItemPressed(item)} selected={item === this.getSelectedTab()}>
                <div style={{ height: 32, width: 32, background: item === this.getSelectedTab() ? 'black' : 'white', marginRight: 16 }}></div>
                <Text color={item === this.getSelectedTab() ? 'black' : 'white'}>{item}</Text>
              </SidebarItem>

            )}
          </div>
        </div>


        <div style={{ flex: 1 }}>
          <MainScreen
          selected={this.getSelectedTab()}
          history={history} />
        </div>

      </ViewWrapper>
    )
  }

  getSelectedTab() {
    const { url } = this.props.match
    console.log(url)
    if (url.includes('events')) return 'Events'
    if (url.includes('event')) return 'Events'
    if (url.includes('edit')) return 'Events'
    if (url.includes('members')) return 'Members'
    else if (url.includes('settings')) return 'Settings'
    else return 'Dashboard'
  }

  onSidebarItemPressed = (item) => {
    const {history} = this.props
    history.push('/'+item.toLowerCase())
  }
}

const SidebarHeader = ({ image, name }) => {
  return (
    <div style={{ background: 'black', display: 'flex', flexDirection: 'row', padding: 24, alignItems: 'center', maxWidth: 280 }}>
      <div style={{ width: 80, height: 80, borderRadius: 40, background: 'white', marginRight: 16 }}></div>
      <div style={{ maxWidth: 180 }}>
        <Text color={'#fff'} medium bold>{name}</Text>
      </div>
    </div>
  )
}

export default App;
