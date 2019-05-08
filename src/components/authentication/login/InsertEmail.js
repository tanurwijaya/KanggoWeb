import React, { Component } from 'react'
import Text from '../../../presentationals/Text'
import { Container, TextField, Item, Button } from '../../../presentationals/index'
import { WHITE } from '../../../themes/Colors';

export default function InsertEmail({ onCheckPress, onEmailChange, onEnterEmail }) {
  return (
    <div>

      <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', marginBottom: 16 }}>
        <div style={{ width: 100, height: 100, borderRadius: 50, background: 'grey' }}></div>
      </div>

      <Text>Email</Text>

      <Item>
        <TextField width={'200px'} placeholder={'test@example.com'} onChange={onEmailChange} onKeyDown={onEnterEmail} />
      </Item>

      <Item center>
        <Button onClick={onCheckPress}><Text tiny color={WHITE}>CEK</Text></Button>
      </Item>
    </div>
  )
}