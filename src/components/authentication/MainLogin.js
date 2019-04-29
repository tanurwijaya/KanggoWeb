import React, { Component } from 'react'
import styled from '@emotion/styled'
import Text from '../../presentationals/Text'
import { Container, TextField, Item, Button } from '../../presentationals/index'
import { WHITE } from '../../themes/Colors';

class MainLogin extends Component {
  render() {
    return (
      <Container center>
        <div>

          <div style={{display:'flex',width:100, height:100, borderRadius:50, background:'grey', alignContent:'center',justifyContent:'center'}}></div>

          <Text>Email</Text>

          <Item>
            <TextField width={'200px'} placeholder={'test@example.com'} />
          </Item>

          <Item center>
            <Button><Text tiny color={WHITE}>CEK</Text></Button>
          </Item>
        </div>
      </Container>
    )
  }
}

export default MainLogin