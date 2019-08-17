import React, { Component } from "react";
// import ShortAnswer from '../../presentationals/Form/ShortAnswer';
// import LongAnswer from '../../presentationals/Form/LongAnswer';
// import RadioButton from '../../presentationals/Form/RadioButton';
// import { PRIMARY_BLUE, WHITE } from '../../themes/Colors';
import gql from 'graphql-tag';
// import AddQuestions from './AddQuestions';
import { withApollo } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import Text from "../../presentationals/Text";
import { faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons'
// import { withRouter } from 'react-router-dom';
import { ViewWrapper, Item, Container } from "../../presentationals";
import { getParticipants } from '../../graphql/queries'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PRIMARY_BLUE, LIGHT_GREY } from "../../themes/Colors";

class ResponseForm extends Component {

  state={
    index: 0,
    formID : this.props
  }

  componentDidMount = async () => {
    const { client, match } = this.props;
    var activityID = match.params.event_id
    // await client.query({
    //   query: gql(getFormID),
    //   variables: { activityID: activityID }
    // }).then(({data})=>{
    //   if(data && data.getActivityDetail && data.getActivityDetail.formID){
    //     this.getResponses(data.getActivityDetail.formID)
    //   }
    // }).catch((e)=>{
    //   console.log('eror',e)
    //   // alert('Password tidak sesuai')
    // });
  }

  getResponses = async (formID) => {
    const { client, match } = this.props;
    var activityID = match.params.event_id
    // await client.query({
    //   query: gql(getAnsweredForm),
    //   variables: { formID: formID }
    // }).then(({data})=>{
      
    // }).catch((e)=>{
      
    // });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: 32,
          border: "1px solid black"
        }}
      >
        <ViewWrapper
          style={{ padding: 16, borderBottom: "1px solid black" }}
          spaceBetween
        >
          <Item column plain>
            <Text bold>Alvin Tanurwijaya</Text>
            <Text>email@test.com</Text>
          </Item>
          <Item plain>
            <Text>081291103131</Text>
          </Item>
        </ViewWrapper>

        <Container column style={{ padding: 16, borderBottom: "1px solid black" }}>
          <Text small>Pertanyaan</Text>
          <Text>Jawaban</Text>
        </Container>

        <Container column style={{ padding: 16, borderBottom: "1px solid black" }}>
          <Text small>Pertanyaan</Text>
          <Text>Jawaban</Text>
        </Container>

        <Container column style={{ padding: 16, borderBottom: "1px solid black" }}>
          <Text small>Pertanyaan</Text>
          <Item>
          <FontAwesomeIcon style={{ height: 16, width: 16, color: PRIMARY_BLUE, marginRight: 4}} icon={faCheckCircle} />
          <Text small>Jawaban 1</Text>
          </Item>

          <Item>
          <FontAwesomeIcon style={{ height: 16, width: 16, color: LIGHT_GREY, marginRight: 4}} icon={faCircle} />
          <Text small>Jawaban 2</Text>
          </Item>
        </Container>

        <Container column style={{ padding: 16 }}>
          <Text small style={{borderBottom : '1px solid black'}}>Pertanyaan</Text>
          <Item style={{marginTop:8, overflowX:'scroll'}} plain>
              <div style={{height:100, width: 210, marginRight:8, background:'#29BFFF'}}/>
              <div style={{height:100, width: 210, marginRight:8, background:'#29BFFF'}}/>
              <div style={{height:100, width: 210, background:'#29BFFF'}}/>

          </Item>
        </Container>
      </div>
    );
  }
}

export default withRouter(withApollo(ResponseForm));
