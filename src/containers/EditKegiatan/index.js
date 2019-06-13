import React, { Component } from 'react'
import ShortAnswer from '../../presentationals/Form/ShortAnswer';
import LongAnswer from '../../presentationals/Form/LongAnswer';
import RadioButton from '../../presentationals/Form/RadioButton';
import { PRIMARY_BLUE, WHITE } from '../../themes/Colors';
import AddQuestions from './AddQuestions';
import Text from '../../presentationals/Text'
import { Button } from '../../presentationals';

class EditKegiatan extends Component {

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
        option: []
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
    if(forms[index] && forms[index]['option'] != options){
      forms[index]['option'] = options
    this.setState({ forms })
    }
  }

  onRemoveQuestion = (index) => {
    const { forms } = this.state
    forms.splice(index, 1)
    this.setState({ forms })
  }

  onSaveForm = () => {
    console.log(this.state.forms)
  }

}

export default EditKegiatan