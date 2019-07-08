import React, { Component } from "react";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";
import Text from "../../presentationals/Text";
import HeaderKegiatan from "./HeaderKegiatan";
import { Button, Wrapper, Item, TextField, Dropdown } from "../../presentationals";
import { WHITE, LIGHT_GREY, DARK_GREY } from "../../themes/Colors";
import { getActivityDetail } from "../../graphql/queries";
import ParticipantsList from "./ParticipantsList";
import Spinner from "react-spinner-material";
import parse from 'html-react-parser';

class DetailKegiatan extends Component {
  state = {
    detailData: null
  };

  onClickForm = () => {
    const { history } = this.props;
    history.push(history.location.pathname + "/edit");
  };

  componentDidMount = () => {
    const { history } = this.props;
    if (history && history.location) {
      let activityID = history.location.pathname.replace("/kegiatan/", "");
      this.getActivityDetail(activityID);
    }
  };

  getActivityDetail = async activityID => {
    const { data } = await this.props.client.query({
      query: gql(getActivityDetail),
      variables: {
        activityID: activityID
      }
    });
    this.setState({ detailData: data.getActivityDetail });
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
    } else {
      return (
        <div style={{ marginLeft: 32, marginRight: 32 }}>
          <HeaderKegiatan
          eventName={detailData.activityName}
          />
          
          <Wrapper column style={{ marginTop: 24 }} plain>
          <Text large style={{ marginBottom: 4 }}>
            Nama kegiatan
          </Text>
          <TextField disabled value={detailData.activityName} style={{width:'80%'}}/>
        </Wrapper>

        <Wrapper column style={{ marginTop: 24 }} plain>
          <Text large style={{ marginBottom: 4 }}>
            Deskripsi Kegiatan
          </Text>

          <div style={{width:'80%', borderRadius:8, minHeight: 100, background:LIGHT_GREY, padding: 8}}>
            {detailData.activityDescription && parse(detailData.activityDescription)}
          </div>
        </Wrapper>

        <Wrapper column style={{ marginTop: 24 }} plain>
          <Text large style={{ marginBottom: 4 }}>
            Lokasi
          </Text>
          <TextField disabled value={detailData.location} style={{width:'80%'}}/>
        </Wrapper>


        
        </div>
      );
    }
  }
}

export default withApollo(DetailKegiatan);
