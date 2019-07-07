import React, { Component } from "react";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";
import Text from "../../presentationals/Text";
import { Button, Wrapper, Item } from "../../presentationals";
import { WHITE, LIGHT_GREY } from "../../themes/Colors";
import { getActivityDetail } from "../../graphql/queries";
import HeaderKegiatan from "../DetailKegiatan/HeaderKegiatan";
import Spinner from "react-spinner-material";

class EditKegiatan extends Component {
  state = {
    detailData: null
  };

  componentDidMount = () =>{
    const { history } = this.props;
    if (history && history.location) {
      let activityID = history.location.pathname.replace("/kegiatan/", "");
      activityID = activityID.replace("/edit", "");
      this.getActivityDetail(activityID);
    }
  }

  getActivityDetail = async activityID => {
    console.log(this.props)
    await this.props.client
      .query({
        query: gql(getActivityDetail),
        variables: {
          activityID: activityID
        }
      })
      .then(({ data }) => {
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
    return <HeaderKegiatan eventName={detailData.activityName} />;
  }
}

export default EditKegiatan;
