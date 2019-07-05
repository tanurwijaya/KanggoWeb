import React, { Component } from "react";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";
import Text from "../../presentationals/Text";
import HeaderKegiatan from "./HeaderKegiatan";
import { Button, Wrapper, Item } from "../../presentationals";
import { WHITE, LIGHT_GREY } from "../../themes/Colors";
import { getActivityDetail } from "../../graphql/queries";
import ParticipantsList from "./ParticipantsList";
import Spinner from "react-spinner-material";

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
      let activityID = history.location.pathname.replace("/event/", "");
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
        console.log(detailData)
      return (
        <div style={{ marginLeft: 32, marginRight: 32 }}>
          <HeaderKegiatan
          eventName={detailData.activityName}
          />
          <Wrapper plain column>
            <Text large>Ada 4 pendaftar yang belum diproses</Text>
            <Button style={{ marginTop: 8, marginBottom: 32 }}>
              <Text color={WHITE}>Proses Sekarang</Text>
            </Button>

            <div
              onClick={this.onClickForm}
              style={{
                width: "100%",
                height: 50,
                background: LIGHT_GREY,
                marginBottom: 32
              }}
            />

            <Text large>Peserta diterima</Text>
            <ParticipantsList />
          </Wrapper>
        </div>
      );
    }
  }
}

export default withApollo(DetailKegiatan);
