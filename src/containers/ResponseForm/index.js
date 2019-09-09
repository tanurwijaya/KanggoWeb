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

class ResponseForm extends Component {
  state = {
    detailData: null,
    participantData: null,
    userHistory: null,
    index: 0,
    formID: this.props
  };

  componentDidMount = async () => {
    const { match } = this.props;
    const { event_id } = match.params;
    this.getActivityDetail(event_id);
    this.getParticipantsList(event_id);
    this.getResponseByForm();
  };

  getResponses = async formID => {
    const { client, match } = this.props;
    var activityID = match.params.event_id
    await client.query({
      query: gql(getUserAnsweredForm),
      variables: { formID: formID }
    }).then(({data})=>{
    }).catch((e)=>{
    });
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

  acceptUser = async (userId, joinDate) => {};

  rejectUser = async (userId, joinDate) => {};

  getParticipantsByUserID = userId => {
    const { participantData } = this.state;
    return participantData.find(
      participant => participant.user && participant.user.id === userId
    );
  };

  getResponseByForm = async () => {
    const {client} = this.props
    const {formID} = this.state
    await client.query({
      query: gql(getFormResponseByStatus),
      variables: {
        formID: formID,
        status: "WAITING"
      }
    }).then(({data})=>{
      console.log(data)
    }).catch((e)=>{
      console.log('error get response', e)
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
          if (
            history.organizationID === orgzId &&
            history.activityID !== detailData.id
          ) {
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

  render() {
    const { match } = this.props;
    const { user_id } = match.params;
    const { detailData, participantData, userHistory } = this.state;
    this.getPreviousUserActivity();
    if (!detailData) return null;
    else if (!participantData) return null;
    const participant = this.getParticipantsByUserID(user_id);
    return (
      <div>
        <ResponseList
          userData={participant.user && participant.user}
          formData={null}
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
