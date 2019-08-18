import React from 'react'
import Text from '../../../presentationals/Text'
import { TextField, Item, Button } from '../../../presentationals/index'
import { WHITE, PRIMARY_BLUE } from '../../../themes/Colors';
import Spinner from "react-spinner-material";

export default function InsertEmail({ onCheckPress, onEmailChange, onEnterEmail,isButtonDisabled, isFetching}) {
  return (
    <div>
      <Text large>Email</Text>

      <Item>
        <TextField
          width={"100%"}
          placeholder={"test@example.com"}
          onChange={onEmailChange}
          onKeyDown={onEnterEmail}
        />
      </Item>

      <Item center>
        {isFetching ? (
          <div style={{ marginTop: 8 }}>
            <Spinner
              size={24}
              spinnerColor={PRIMARY_BLUE}
              spinnerWidth={2}
              visible={true}
            />
          </div>
        ) : (
          <Button disabled={isButtonDisabled} onClick={onCheckPress}>
            <Text large color={WHITE}>
              CEK
            </Text>
          </Button>
        )}
      </Item>
    </div>
  );
}