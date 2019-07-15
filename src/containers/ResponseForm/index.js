import React, { Component } from "react";
// import ShortAnswer from '../../presentationals/Form/ShortAnswer';
// import LongAnswer from '../../presentationals/Form/LongAnswer';
// import RadioButton from '../../presentationals/Form/RadioButton';
// import { PRIMARY_BLUE, WHITE } from '../../themes/Colors';
// import { withApollo } from 'react-apollo';
// import gql from 'graphql-tag';
// import AddQuestions from './AddQuestions';
import Text from "../../presentationals/Text";
import { faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons'
// import { withRouter } from 'react-router-dom';
import { ViewWrapper, Item, Container } from "../../presentationals";
// import { createVolunteerForm, addFormToActivity } from '../../graphql/mutations'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PRIMARY_BLUE, LIGHT_GREY } from "../../themes/Colors";

class ResponseForm extends Component {
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
          <Item style={{marginTop:8}} plain>
              <div style={{height:100, width: 210, marginRight:8, background:'#29BFFF'}}/>
              <div style={{height:100, width: 210, background:'#29BFFF'}}/>
          </Item>
        </Container>
      </div>
    );
  }
}

export default ResponseForm;
