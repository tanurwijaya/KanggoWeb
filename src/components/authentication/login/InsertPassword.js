import React from 'react'
import Text from '../../../presentationals/Text'
import { TextField, Item, Button } from '../../../presentationals/index'
import { WHITE } from '../../../themes/Colors';

export default function InsertPassword({ organisasi, onLoginPress, onPasswordChange, onEnterPassword }) {
  return (
    <div>

      <Text>Password</Text>

      <Item>
        <TextField type={'password'} width={'100%'} placeholder={'password'} onChange={onPasswordChange} onKeyDown={onEnterPassword} />
      </Item>

      <Item center>
        <Button onClick={onLoginPress}><Text large color={WHITE}>LOGIN</Text></Button>
      </Item>
    </div>
  )
}