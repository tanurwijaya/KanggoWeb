import React, { Component } from 'react'
import ShortAnswer from '../../presentationals/Form/ShortAnswer';
import LongAnswer from '../../presentationals/Form/LongAnswer';
import RadioButton from '../../presentationals/Form/RadioButton';
import { PRIMARY_BLUE, WHITE } from '../../themes/Colors';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import AddQuestions from './AddQuestions';
import Text from '../../presentationals/Text'
import { withRouter } from 'react-router-dom';
import { Button } from '../../presentationals';
import { createVolunteerForm, addFormToActivity } from '../../graphql/mutations'

class VolunteerForm extends Component {

  /**
   * Form
   * - type
   * - question
   * - options
   */

  state = {
    forms: []
  }

  componentDidMount = () => {
    //fetch data user
  }


  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 32, paddingBottom: 32, height:'100%', overflowY:'scroll' }}>
        {this.renderQuestions(this.state.forms)}

        <AddQuestions
          onAddQuestionPressed={(type) => this.onAddQuestionPressed(type)}
        />

        <div style={{ display: 'flex', alignSelf: 'flex-end', margin: 16, flexDirection: 'row' }}>
          <Button onClick={this.onSaveForm}><Text color={WHITE}>Simpan</Text></Button>
        </div>
      </div>
    )
  }

  onAddQuestionPressed = (type) => {
    const { forms } = this.state
    if (type === 'ShortAnswer') {
      forms.push({
        type: 'ShortAnswer',
      })
    } else if (type === 'LongAnswer') {
      forms.push({
        type: 'LongAnswer',
      })
    } else if (type === 'RadioButton') {
      forms.push({
        type: 'RadioButton',
        options: []
      })
    }
    this.setState({ forms })
  }

  renderQuestions = (forms) => {
    let view = []
    forms.map((form, index) => {
      if (form.type === 'ShortAnswer') {
        view.push(
          <ShortAnswer
            key={index}
            onFormQuestionChange={(question)=>this.onFormQuestionChange(index,question)}
            onRemovePressed={() => this.onRemoveQuestion(index)}
          />)
      } else if (form.type === 'LongAnswer') {
        view.push(
          <LongAnswer
            key={index}
            onFormQuestionChange={(question)=>this.onFormQuestionChange(index,question)}
            onRemovePressed={() => this.onRemoveQuestion(index)}
          />) 
      } else if (form.type === 'RadioButton') {
        view.push(
          <RadioButton
            key={index}
            onFormQuestionChange={(question)=>this.onFormQuestionChange(index,question)}
            onFormOptionsChange = {(options) => this.onOptionItemChange(index, options)}
            onRemovePressed={() => this.onRemoveQuestion(index)}
          />)
      }
    })
    return view
  }

  onFormQuestionChange = (index, question) => {
    const { forms } = this.state
    forms[index]['question'] = question
    this.setState({ forms })
  }

  onOptionItemChange = (index, options) => {
    const { forms } = this.state
    if(forms[index] && forms[index]['options'] != options){
      forms[index]['options'] = options
    this.setState({ forms })
    }
  }

  onRemoveQuestion = (index) => {
    const { forms } = this.state
    forms.splice(index, 1)
    this.setState({ forms })
  }

  onSaveForm = async () => {
    const {client} = this.props
    await client.mutate({
      mutation: gql(createVolunteerForm),
      variables: {
          input: {
            organizationID: localStorage.getItem('userid'),
            forms: this.state.forms
          }
      }
  }).then(({data})=>{
    this.attachFormToActivity(data.createVolunteerForm.id)
  }).catch(err=>{
    alert("Gagal membuar form, silakan coba lagi nanti")
  })
  }

  attachFormToActivity = async (formID) => {
    const {client, match} = this.props
    if(match.params.event_id){
      await client.mutate({
        mutation: gql(addFormToActivity),
        variables: {
            input: {
              activityID: match.params.event_id,
              organizationID: localStorage.getItem('userid'),
              formID : formID
            }
        }
    })
    }
  }

}


export default withRouter(withApollo(VolunteerForm))
