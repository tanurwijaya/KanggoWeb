import React, { Component } from "react";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";
import Text from "../../presentationals/Text";
import styled from '@emotion/styled'
import {
  Button,
  Wrapper,
  Item,
  AreaField,
  TextField,
  ViewWrapper
} from "../../presentationals";
import { WHITE, LIGHT_GREY, DARK_GREY } from "../../themes/Colors";
import { getActivityDetail } from "../../graphql/queries";
import HeaderKegiatan from "../DetailKegiatan/HeaderKegiatan";
import Spinner from "react-spinner-material";
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class EditKegiatan extends Component {
  state = {
    detailData: null
  };

  componentDidMount = () => {
    const { history } = this.props;
    if (history && history.location) {
      let activityID = history.location.pathname.replace("/kegiatan/", "");
      activityID = activityID.replace("/edit", "");
      this.getActivityDetail(activityID);
    }
  };

  getActivityDetail = async activityID => {
    await this.props.client
      .query({
        query: gql(getActivityDetail),
        variables: {
          activityID: activityID
        }
      })
      .then(({ data }) => {
        console.log('data',data)
        this.setState({ detailData: data.getActivityDetail });
      })
      .catch(err => {});
  };

  render() {
    const { detailData } = this.state;
    if (!detailData) {
      return (
        <Item center>
          <Spinner
            size={40}
            spinnerColor={"#333"}
            spinnerWidth={2}
            visible={true}
          />
        </Item>
      );
    }
    return (
      <div style={{ marginLeft: 32, marginRight: 32, paddingBottom: 32 }}>
        <HeaderKegiatan eventName={detailData.activityName} />

        <Wrapper column style={{ marginTop: 24 }} plain>
          <Text large style={{ marginBottom: 4 }}>
            Deskripsi Kegiatan
          </Text>
          <AreaField width={"80%"} />
        </Wrapper>

        <Wrapper column style={{ marginTop: 24 }} plain>
          <Text large style={{ marginBottom: 4 }}>
            Lokasi
          </Text>
          <TextField width={"80%"} />
        </Wrapper>

        <ViewWrapper style={{ marginTop: 24 }} plain>
          <Wrapper style={{marginRight:64}} plain column>
          <Text large style={{ marginBottom: 4 }}>
            Tanggal Mulai
          </Text>
          <TextField/>
          </Wrapper>

          <Wrapper plain column>
          <Text large style={{ marginBottom: 4 }}>
            Tanggal Selesai
          </Text>
          <TextField/>
          </Wrapper>
        </ViewWrapper>

        <Wrapper column style={{ marginTop: 24 }} plain>
          <Text large>
            Harus mengisi form untuk mendaftar
          </Text>
          <Text color={DARK_GREY} style={{ marginBottom: 4 }}>
            Jika opsi ini dipilih maka pengguna yang akan mendaftar diharuskan
            mengisi form terlebih dahulu
          </Text>

          <AddFormWrapper onClick={()=>alert('click')}>
            <FontAwesomeIcon style={{height:24, width:24, color:DARK_GREY, alignSelf:'center', marginBottom:8}} icon={faPlus}/>
            <Text color={DARK_GREY} large center>Buat Form Pendaftaran</Text>
          </AddFormWrapper>
          
        </Wrapper>
      </div>
    );
  }
}

const AddFormWrapper = styled.div(props => ({
  padding: 56,
  border: `1px solid ${LIGHT_GREY}`,
  width: "80%",
  display: "flex",
  flexDirection: "column",
  marginTop: 8,
  ":hover": {
    cursor: 'pointer'
},
}));

export default EditKegiatan;
