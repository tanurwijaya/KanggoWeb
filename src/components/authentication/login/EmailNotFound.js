import React, { Component } from 'react'
import { Button, Container, Item } from '../../../presentationals';
import Text from '../../../presentationals/Text'
import { WHITE } from '../../../themes/Colors';

export default class EmailNotFound extends Component {
  render() {
    return (
      <Container>
        <Item>
        <Text large>Akun dengan email test@example.com tidak ditemukan</Text>
        </Item>
        <Item center>
        <Button><Text color={WHITE}>Buat Akun</Text></Button>
        </Item>
        <Item center plain>
        <Button><Text color={WHITE}>Coba Email Lain</Text></Button>
        </Item>
        </Container>
    )
  }
}