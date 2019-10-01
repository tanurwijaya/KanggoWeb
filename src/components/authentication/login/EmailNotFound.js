import React, { Component } from 'react'
import { Button, Container, Item, SecondaryButton } from '../../../presentationals';
import Text from '../../../presentationals/Text'
import { WHITE, PRIMARY_BLUE } from '../../../themes/Colors';

export default class EmailNotFound extends Component {
  render() {
    const {email, hideModal, doRegister} = this.props
    return (
      <Container>
        <Item>
          <div>
          <Text color={'#C4C4C4'} larger>Akun dengan email</Text>
          <Text color={'#8B8B8B'} larger>{` ${email} `}</Text>
          <Text color={'#C4C4C4'} larger>tidak ditemukan</Text>
          </div>
        </Item>
        <Item center>
        <Button onClick={doRegister}><div style={{width:160}}><Text color={WHITE}>Buat Akun</Text></div></Button>
        </Item>
        <Item center plain>
        <SecondaryButton onClick={hideModal}><div style={{width:160}}><Text color={PRIMARY_BLUE}>Coba Email Lain</Text></div></SecondaryButton>
        </Item>
        </Container>
    )
  }
}