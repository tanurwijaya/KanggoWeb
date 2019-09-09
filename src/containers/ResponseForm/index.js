import React, { Component } from "react";
import { withApollo } from "react-apollo";
import { withRouter } from "react-router-dom";
import ResponseList from "./ResponseList";
import ButtonAction from "./ButtonAction";
import gql from "graphql-tag";
import {
  getActivityDetail,
  getFormResponseByStatus,
  getParticipants,
  getJoinHistory,
  getUserAnsweredForm
} from "../../graphql/queries";
import { updateJoinStatus } from "../../graphql/mutations";
import Header from "./Header";
import PagingHandler from "./PagingHandler";

class ResponseForm extends Component {
  state = {
    detailData: null,
    participantData: null,
    userHistory: null,
    index: 0,
    formID: this.props,
    formResponse: null
  };

  componentDidMount = async () => {
    const { match } = this.props;
    const { event_id } = match.params;
    this.getActivityDetail(event_id);
    this.getParticipantsList(event_id);
    this.getResponseByForm();
  };

  getParticipantsList = async activityID => {
    await this.props.client
      .query({
        query: gql(getParticipants),
        variables: { activityID: activityID, organizationID: "" }
      })
      .then(({ data }) => {
        this.setState({ participantData: data.getParticipants.participants });
      })
      .catch(error => {
        alert("Terjadi kesalahan, silakan coba lagi");
      });
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

  acceptUser = async (userId, joinDate) => {
    this.updateJoinStatusHandler('SUCCESS')
    // alert("Berhasil menerima peserta");
    // history.push(`/kegiatan/${event_id}`);
  };

  sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  updateJoinStatusHandler = async (status) => {
    const { client, match, history } = this.props;
    const { event_id, user_id } = match.params;
    const participant = this.getParticipantsByUserID(user_id);
    console.log('participant2',participant)
    await client
      .mutate({
        mutation: gql(updateJoinStatus),
        variables: {
          input: {
            userID: user_id,
            joinAt: participant.joinDate,
            activityID: event_id,
            status: status
          }
        }
      })
      .then(({data}) => {
        alert(data.updateJoinStatus.message)
        history.push(`/kegiatan/${event_id}`);
      })
      .catch(err => {
        console.log('Error update status',err)
        alert("Gagal mengubah status");
      });
  };

  rejectUser = async (userId, joinDate) => {
    this.updateJoinStatusHandler('REJECTED')
  };

  getParticipantsByUserID = userId => {
    const { participantData } = this.state;
    return participantData.find(
      participant => participant.user && participant.user.id === userId
    );
  };

  getResponseByForm = async () => {
    const { client } = this.props;
    const { formID } = this.state;
    await client
      .query({
        query: gql(getFormResponseByStatus),
        variables: {
          formID: formID,
          status: "WAITING"
        }
      })
      .then(({ data }) => {
        console.log(data);
      })
      .catch(e => {
        console.log("error get response", e);
      });
  };

  getPreviousUserActivity = async () => {
    const { client, match } = this.props;
    const { detailData } = this.state;
    const { user_id } = match.params;
    const orgzId = localStorage.getItem("userid");
    await client
      .query({
        query: gql(getJoinHistory),
        variables: {
          userID: user_id
        }
      })
      .then(({ data }) => {
        const { userHistory } = this.state;
        const arrJoin = [];
        const joinHistory = data && data.getJoinHistory;
        joinHistory.forEach(history => {
          if (history.organizationID === orgzId) {
            arrJoin.push(history);
          }
        });

        if (userHistory == null) {
          this.setState({ userHistory: arrJoin });
        }
      })
      .catch(e => {
        console.log("error get response", e);
      });
  };

  getFormResponse = () => {
    const { userHistory, formResponse } = this.state;
    const { match } = this.props;
    var activityID = match.params.event_id;
    const currentActitivy =
      userHistory &&
      userHistory.find(history => history.activityID === activityID);
    console.log("getFormResponse curr", currentActitivy.formResponse);
    console.log("state", formResponse);
    console.log("isSame", formResponse == currentActitivy.formResponse);
    if (formResponse != currentActitivy.formResponse) {
      console.log("update");
      this.setState({
        formResponse: currentActitivy && currentActitivy.formResponse
      });
    }
  };

  onPressNext = () => {
    const { history, match } = this.props;
    const { event_id } = match.params;
    const { participantData, userHistory } = this.state;
    console.log("participantData.length", participantData.length);
    console.log("this.getCurrentIndex()", this.getCurrentIndex());
    if (this.getCurrentIndex() < participantData.length + 1) {
      const nextUser = participantData[this.getCurrentIndex() + 1];
      // this.setState({formResponse: userHistory[this.getCurrentIndex()+1].formResponse})
      history.push(`/kegiatan/${event_id}/responses/${nextUser.user.id}`);
    }
  };

  onPressPrev = () => {
    const { history, match } = this.props;
    const { event_id } = match.params;
    const { participantData } = this.state;
    if (this.getCurrentIndex() !== 0) {
      const nextUser = participantData[this.getCurrentIndex() - 1];
      history.push(`/kegiatan/${event_id}/responses/${nextUser.user.id}`);
      this.getFormResponse();
    }
  };

  getCurrentIndex = () => {
    const { client, match } = this.props;
    const { user_id } = match.params;
    console.log();
    const { participantData } = this.state;
    return participantData.findIndex(
      data => data.user && data.user.id === user_id
    );
  };

  render() {
    const { match } = this.props;
    const { user_id } = match.params;
    const {
      detailData,
      participantData,
      userHistory,
      formResponse
    } = this.state;
    this.getPreviousUserActivity();
    if (!detailData) return null;
    else if (!participantData) return null;
    const participant = this.getParticipantsByUserID(user_id);
    this.getFormResponse();
    return (
      <div style={{ marginBottom: 32 }}>
        <Header activityName={detailData.activityName} />
        <PagingHandler
          current={this.getCurrentIndex() + 1}
          max={participantData.length}
          onPressNext={() => this.onPressNext()}
          onPressPrev={() => this.onPressPrev()}
        />
        <ResponseList
          userData={participant.user && participant.user}
          formData={formResponse}
          userHistory={userHistory}
        />
        <ButtonAction
          onPressAccept={() => this.acceptUser()}
          onPressReject={() => this.rejectUser()}
        />
      </div>
    );
  }
}

export default withRouter(withApollo(ResponseForm));
