import React, { Component } from 'react'
import Text from '../Text'
import { TextField, AreaField, UnderlineInput } from '..';

class RadioButton extends Component {

  state = {
    list: ['A', 'B'],
    input : ''
  }

  render() {
    return (
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', margin: 16 }}>
        <Text large >Pertanyaannya</Text>
        <RenderRadio list={this.state.list} />
        <UnderlineInput value={this.state.input} onKeyDown={this.onKeyDown} onChange={this.onInputChange}/>
      </div>
    )
  }

  onKeyDown = (e) => {
    if (e.key === 'Enter') {
      const {list } = this.state
      list.push(this.state.input)
      this.setState({list, input : ''},()=>
      console.log(this.state.input)
      )
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

}

function RenderRadio({ list }) {
  let view = []
  list.map((item, index) => {
    view.push(
      <div style={{padiding:8}}>
        <input type={'radio'}/>
          <Text style={{marginLeft:8}}>{item}</Text>
      </div>
        )
      })
      return view
    }
    
export default RadioButton