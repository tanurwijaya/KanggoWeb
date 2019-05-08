import React, { Component } from 'react'
import Text from '../../../presentationals/Text'
import { Container, TextField, Item, Button } from '../../../presentationals/index'
import { WHITE } from '../../../themes/Colors';

export default function InsertPassword({ organisasi, onLoginPress, onPasswordChange, onEnterPassword }) {
  return (
    <div>

      <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center', marginBottom: 16 }}>
        <div style={{ width: 50, height: 50, borderRadius: 25, background: 'grey' }}></div>

        <img
          style={{ width: 150, height: 150, marginLeft: 16 }}
          src={organisasi.url_logo_komunitas} alt={organisasi.nama_komunitas} />

      </div>

      <Text>Password</Text>

      <Item>
        <TextField type={'password'} width={'200px'} placeholder={'password'} onChange={onPasswordChange} onKeyDown={onEnterPassword} />
      </Item>

      <Item center>
        <Button onClick={onLoginPress}><Text tiny color={WHITE}>LOGIN</Text></Button>
      </Item>
    </div>
  )
}