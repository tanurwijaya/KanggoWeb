import React, { Component } from 'react'
import Text from '../Text'
import { TextField, AreaField, UnderlineInput } from '..';
import FormItem from './FormItem';

class RadioButton extends Component {

  state = {
    list: [],
    input: ''
  }

  componentDidUpdate = () => {
    this.props.onFormOptionsChange(this.state.list)
  }

  render() {
    
    return (
      <FormItem onRemovePressed={() => this.props.onRemovePressed()} onFormQuestionChange={(value)=>this.props.onFormQuestionChange(value)}>
        {this.renderRadio()}
        <UnderlineInput style={{marginLeft: 22}} value={this.state.input} onKeyDown={this.onKeyDown} onChange={this.onInputChange} width={'80%'} />
      </FormItem>
    )
  }

  onKeyDown = (e) => {
    if (e.key === 'Enter') {
      const { list } = this.state
      list.push(this.state.input)
      this.setState({ list, input: '' }, () =>
        null
      )
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  renderRadio() {
    let view = []
    const {list} = this.state
    list.map((item, index) => {
      view.push(
        <div key={index} style={{ padiding: 8, display: 'flex', flexDirection: 'row' }}>
          <input style={{ alignItems: 'center', alignSelf: 'center', marginRight: 8 }} type={'radio'} disabled />
          <UnderlineInput fontSize={12} width={'80%'} value={item} onChange={(event)=> this.onSingleOptionChange(event.target.value, index)}/>
        </div>
      )
    })
    return view
  }

  onSingleOptionChange = (text, index) => {
    const {list} = this.state
    list[index] = text
    this.setState({list})
  }



}

// function RenderRadio({ list }) {
//   let view = []
//   list.map((item, index) => {
//     view.push(
//       <div key={index} style={{padiding:8, display:'flex', flexDirection:'row'}}>
//         <input style={{alignItems: 'center', alignSelf:'center', marginRight: 8}} type={'radio'} disabled/>
//           <UnderlineInput fontSize={12} width={'80%'} value={item} onChange={}/>
//       </div>
//         )
//       })
//       return view
//     }

export default RadioButton