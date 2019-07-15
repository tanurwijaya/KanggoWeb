import React, { Component } from "react";
import {
  ViewWrapper,
  Wrapper,
  SecondaryButton,
  TextField,
  AreaField,
  Item
} from "../../presentationals";
import gql from "graphql-tag";
import Text from "../../presentationals/Text";
import { getOrganizationById } from "../../graphql/queries";
import { PRIMARY_BLUE } from "../../themes/Colors";
import { withApollo } from "react-apollo";
import Spinner from "react-spinner-material";

class ProfileScreen extends Component {

  state = {
    organizationData: null
  };

  componentDidMount = () => {
    this.getOrganizationDetail(localStorage.getItem('userid'))
  };

  getOrganizationDetail = (organizationID) => {
    const { client } = this.props;
    client
      .query({
        query: gql(getOrganizationById),
        variables: {
          organizationID: organizationID 
        }
      })
      .then(({ data }) => {
        this.setState({ organizationData: data.getOrganizationById });
      })
      .catch(err => {});
  };

  render() {
    const {organizationData} = this.state
    if(!organizationData){
      return(
        <Item center>
        <Spinner
          size={40}
          spinnerColor={"#333"}
          spinnerWidth={2}
          visible={true}
        />
        </Item>
      )
    }
    const {email, adminName, focusType, year, description, organizationName} = organizationData
    const focus = focusType;
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
            <div style={{ alignSelf: "center", marginLeft: 8 }}>
              <Text larger color={"#fff"}>
                {organizationName}
              </Text>
            </div>
          </Wrapper>
        </ViewWrapper>

        <Wrapper column style={{ marginTop: 24 }} plain>
          <Text large style={{marginBottom: 4}}>Fokus organisasi</Text>
          <OrganizationFocus list={focus} />
        </Wrapper>

        <Wrapper column style={{ marginTop: 16 }} plain>
        <Text large style={{marginBottom: 4}}>Email</Text>
          <TextField disabled width={"50%"} value={email} />
        </Wrapper>

        <Wrapper column style={{ marginTop: 16 }} plain>
        <Text large style={{marginBottom: 4}}>Nama Admin</Text>
          <TextField disabled width={"50%"} value={adminName} />
        </Wrapper>

        <Wrapper column style={{ marginTop: 16 }} plain>
        <Text large style={{marginBottom: 4}}>Tahun berdiri</Text>
          <TextField disabled width={"50%"} value={year} />
        </Wrapper>

        <Wrapper column style={{ marginTop: 16 }} plain>
        <Text large style={{marginBottom: 4}}>Deskripsi</Text>
          <AreaField disabled width={"50%"} value={description} />
        </Wrapper>
      </div>
    );
  }
}

const OrganizationFocus = ({ list }) => {
  var organizationFocus = [];
  list.map((focus, index) =>
    organizationFocus.push(
      <div
        key={index}
        style={{
          paddingTop: 4,
          paddingBottom: 4,
          paddingLeft: 8,
          paddingRight: 8,
          // border: "1px solid black",
          borderRadius: 4,
          marginLeft: index === 0 ? 0 : 8,
          background: PRIMARY_BLUE
        }}
      >
        <Text large color={"#FFF"}>
          {focus}
        </Text>
      </div>
    )
  );
  return <Item plain>{organizationFocus}</Item>;
};

export default withApollo(ProfileScreen);
