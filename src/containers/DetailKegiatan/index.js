import React, { Component } from "react";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";
import Text from "../../presentationals/Text";
import HeaderKegiatan from "./HeaderKegiatan";
import { Button, Wrapper, Item } from "../../presentationals";
import { getActivityDetail, getParticipants } from "../../graphql/queries";
import ParticipantsList from "./ParticipantsList";
import Spinner from "react-spinner-material";
import FundraisingList from "./FundraisingList";

class DetailKegiatan extends Component {
  state = {
    detailData: null,
    participantData: null
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
      this.getFundraisingParticipant();
    }
  };

  getVolunteerParticipant = () => {};

  getFundraisingParticipant = async () => {
    const { history } = this.props;
    let activityID = history.location.pathname.replace("/kegiatan/", "");
    await this.props.client
      .query({
        query: gql(getParticipants),
        variables: { activityID: activityID, organizationID: "" }
      })
      .then(({ data }) => {
        this.setState({ participantData: data });
      })
      .catch(error => {
        alert('Terjadi kesalahan, silakan coba lagi');
      });
  };

  componentDidUpdate = (_, prevState) => {
    // const { history } = this.props;
    // alert('update nih')
    // console.log('is same data',prevState.detailData !== this.state.detailData)
    if (
      this.state.detailData != null &&
      prevState.detailData !== this.state.detailData
    ) {
      // let activityID = history.location.pathname.replace("/kegiatan/", "");
      // this.getActivityDetail(activityID);
    } else {
    }
  };

  getActivityDetail = async activityID => {
    const { data } = await this.props.client.query({
      query: gql(getActivityDetail),
      variables: {
        activityID: activityID
      }
    });
    this.setActivityDetail(data.getActivityDetail);
  };

  setActivityDetail = data => {
    this.setState({ detailData: data });
  };

  navigateToEdit = () => {
    const { history } = this.props;
    history.push(history.location.pathname + "/edit");
  };

  showCancelForm = () => {};

  isFormValid = () => {};

  renderTable = () => {
    const { detailData, participantData } = this.state;
    if (detailData.activityType === "Fundraising") {
      return (
        <>
          <Text bold color={"#000"}>
            Daftar Donatur
          </Text>
          <FundraisingList data={participantData} />
        </>
      );
    } else if (detailData.activityType === "Volunteer") {
      return (
        <>
          <Text bold color={"#000"}>
            Daftar peserta
          </Text>
          <ParticipantsList data={participantData} />
        </>
      );
    }
    return null;
  };

  render() {
    const { detailData } = this.state;
    const { history } = this.props;
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
            navigateToEdit={() => this.navigateToEdit()}
            eventName={detailData.activityName}
          />

          {detailData.activityType === "Volunteer" && (
            <Wrapper column style={{ marginTop: 24, marginBottom: 32 }} plain>
              <Text bold color={"#000"} style={{ marginBottom: 8 }}>
                Ada 4 peserta yang belum di proses
              </Text>
              <Button
                onClick={() =>
                  history.push(history.location.pathname + "/responses")
                }
              >
                <Text color={"white"}>Proses Sekarang</Text>
              </Button>
            </Wrapper>
          )}

          {this.renderTable()}
        </div>
      );
    }
  }
}

export default withApollo(DetailKegiatan);
