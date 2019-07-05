import React, { Component } from "react";
import {
  ViewWrapper,
  Wrapper,
  SecondaryButton,
  TextField,
  AreaField,
  Item
} from "../../presentationals";
import Text from "../../presentationals/Text";
import { PRIMARY_BLUE } from "../../themes/Colors";

class ProfileScreen extends Component {
  render() {
    const focus = ["Sosial", "Lingkungan"];
    return (
      <div
        style={{
          paddingLeft: 32,
          paddingRight: 32,
          paddingTop: 16,
          paddingBottom: 16
        }}
      >
        <ViewWrapper itemCenter flex={1} background={"#000"} spaceBetween>
          <Wrapper>
            <div style={{ width: 80, height: 80, background: "#fff" }} />
            <div style={{ alignSelf: "center", marginLeft: 8 }}>
              <Text larger color={"#fff"}>
                Nama organisasi
              </Text>
            </div>
          </Wrapper>

          <SecondaryButton>
            <Text small color={"#FF6961"}>
              Logout
            </Text>
          </SecondaryButton>
        </ViewWrapper>

        <Wrapper column style={{ marginTop: 24 }} plain>
          <Text>Fokus organisasi</Text>
          <OrganizationFocus list={focus} />
        </Wrapper>

        <Wrapper column style={{ marginTop: 16 }} plain>
          <Text>Tahun berdiri</Text>
          <TextField disabled width={"50%"} value={"tester"} />
        </Wrapper>

        <Wrapper column style={{ marginTop: 16 }} plain>
          <Text>Deskripsi</Text>
          <AreaField disabled width={"50%"} value={"tester"} />
        </Wrapper>
      </div>
    );
  }
}

const OrganizationFocus = ({ list }) => {
  var organizationFocus = []
  list.map((focus, index) =>
    organizationFocus.push(
      <div
        key={index}
        style={{
          paddingTop: 4,
          paddingBottom:4,
          paddingLeft:8,
          paddingRight:8,
          // border: "1px solid black",
          borderRadius:4,
          marginLeft: index === 0 ? 0 : 8,
          background: PRIMARY_BLUE
        }}
      >
        <Text small color={'#FFF'}>{focus}</Text>
      </div>
    )
  );
  return <Item plain>{organizationFocus}</Item>
}

export default ProfileScreen;
