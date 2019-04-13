import React, { Component } from 'react';
import logo from './logo.svg';
import RunningProgram from './components/widget/RunningProgram';
import { ViewWrapper } from './presentationals';
import Text from './presentationals/Text'

const listItem = ['Dashboard', 'Members', 'Campaign', 'Settings']
class App extends Component {
  render() {
    return (
      <ViewWrapper plain flex={1} row>
        <div style={{ display:'flex', flexDirection:'column', background:'black', height:'100%'}}>
          <SidebarHeader name={'1000 Guru Tangsel'} />
          <div style={{display:'flex',flex:1,flexDirection:'column'}}>
          {listItem.map((item) =>
            <div style={{ display: 'flex', padding: 16, flex: 1, alignItems: 'center', background: 'black', borderTop: '1px solid white', borderColor: '#fff', flexDirection: 'row' }}>
              <div style={{ height: 32, width: 32, background: 'white', marginRight: 16 }}></div>
              <Text color={'white'}>{item}</Text>
            </div>
            
          )}
          </div>
        </div>


        <div style={{ padding: 32, flex: 1 }}>
          <RunningProgram
            eventName={'Testing dari props'}
            numRegistered={32}
            numUnprocess={1}
          />
        </div>

      </ViewWrapper>
    )
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
