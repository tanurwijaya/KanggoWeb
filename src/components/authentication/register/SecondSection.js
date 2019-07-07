import React, { Component } from "react";
import Text from "../../../presentationals/Text";
import {
  Container,
  TextField,
  Item,
  Button
} from "../../../presentationals/index";
import { WHITE, PRIMARY_BLUE } from "../../../themes/Colors";

class SecondSection extends Component {
  render() {
    const {
      onAdminNameChange,
      isButtonDisabled,
      onContactPersonChange,
      onChangePassword,
      onChangeRetypePassword,
      onButtonPressed,
      error
    } = this.props;
    return (
      <div>
        <div
          style={{
            width: "66%",
            height: 4,
            background: PRIMARY_BLUE,
            marginBottom: 32
          }}
        />
        <Container center>
          <Text larger>Create your account</Text>

          <div style={{ width: "30%" }}>
            <Item column>
              <Text>Nama admin</Text>
              <TextField onChange={onAdminNameChange} />
            </Item>

            <Item column>
              <Text>Contact person phone</Text>
              <TextField type="tel" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" onChange={onContactPersonChange} />
            </Item>

            <Item column>
              <Text>Password</Text>
              <TextField type="password" onChange={onChangePassword} />
            </Item>

            <Item column>
              <Text>Ulangi password</Text>
              <TextField type="password" onChange={onChangeRetypePassword} />
            </Item>
          </div>

          <Button onClick={onButtonPressed} disabled={isButtonDisabled}>
            <Text color={WHITE}>Buat Akun</Text>
          </Button>
        </Container>
      </div>
    );
  }
}

export default SecondSection;
