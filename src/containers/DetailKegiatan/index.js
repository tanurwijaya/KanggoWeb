import React, { Component } from "react";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";
import Text from "../../presentationals/Text";
import HeaderKegiatan from "./HeaderKegiatan";
import { Button, Wrapper, Item, ViewWrapper } from "../../presentationals";
import { getActivityDetail, getParticipants, getFundraisingProgress } from "../../graphql/queries";
import ParticipantsList from "./ParticipantsList";
import Spinner from "react-spinner-material";
import FundraisingList from "./FundraisingList";
import DetailWidget from "./DetailWidget";

class DetailKegiatan extends Component {
  state = {
    detailData: null,
    participantData: null,
    fundraisingProgress: 0
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
      this.getFundraisingProgress(activityID);
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
        alert("Terjadi kesalahan, silakan coba lagi");
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

  getFundraisingProgress = async activityID => {
    await this.props.client
      .query({
        query: gql(getFundraisingProgress),
        variables: {
          activityID: activityID
        }
      })
      .then(({ data }) => {
        if (
          data &&
          data.getFundraisingProgress &&
          data.getFundraisingProgress.donationTotal
        ) {
          this.setState({
            fundraisingProgress: data.getFundraisingProgress.donationTotal
          });
        }
      })
      .catch(error => console.log("error", error));
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
    if (
      participantData &&
      participantData.getParticipants &&
      participantData.getParticipants.participants &&
      participantData.getParticipants.participants.length === 0
    ) {
      return (
        <ViewWrapper>
          <Text center>Belum ada</Text>
        </ViewWrapper>
      );
    }
    if (detailData.activityType === "Fundraising") {
      return (
        <>
          <Text bold color={"#000"}>
            Daftar Donatur
          </Text>
          <FundraisingList
            activity={detailData}
            data={participantData}
          />
        </>
      );
    } else if (detailData.activityType === "Volunteer") {
      return (
        <>
          <Text bold color={"#000"}>
            Daftar peserta
          </Text>
          <ParticipantsList activity={detailData} data={participantData} />
        </>
      );
    }
    return null;
  };

  render() {
    const { detailData, fundraisingProgress, participantData } = this.state;
    const { history } = this.props;
    console.log('participantData',participantData)
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
      const {activityDateStart,activityDateEnd, location} = detailData
      return (
        <div style={{ marginLeft: 32, marginRight: 32 }}>
          <HeaderKegiatan
            activityType={detailData.activityType}
            navigateToEdit={() => this.navigateToEdit()}
            eventName={detailData.activityName}
            fundraisingProgress={fundraisingProgress}
            participantAmount={participantData && participantData.getParticipants && participantData.getParticipants.numberOfParticipants }
          />

          <DetailWidget
            activityDateStart={activityDateStart}
            activityDateEnd={activityDateEnd}
            location={location}
          />

          {detailData.activityType === "Volunteer" &&
            participantData &&
            participantData.getParticipants &&
            participantData.getParticipants.unprocessedParticipants ? (
              <Wrapper column style={{ marginTop: 24, marginBottom: 32 }} plain>
                <Text bold color={"#000"} style={{ marginBottom: 8 }}>
                  {`Ada ${participantData.getParticipants.unprocessedParticipants} peserta yang belum di proses`}
                </Text>
                <Button
                  onClick={() =>
                    history.push(history.location.pathname + "/responses/"+participantData.getParticipants.participants[0].user.id)
                  }
                >
                  <Text color={"white"}>Proses Sekarang</Text>
                </Button>
              </Wrapper>
            ): null}

          {this.renderTable()}
        </div>
      );
    }
  }
}

export default withApollo(DetailKegiatan);
