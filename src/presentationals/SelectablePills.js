import React, { Component } from 'react'
import { PRIMARY_BLUE, WHITE, BLACK } from '../themes/Colors';
import Text from './Text'
class SelectablePills extends Component {

  state = {
    list: []
  }

  componentDidMount() {
    console.log('did mount', this.props.list)
    const { list } = this.props
    let processedData = []
    list.map((item) => {
      processedData.push({
        value: item,
        selected: false
      })
    })
    this.setState({ list: processedData })

  }

  renderList = () => {
    let view = []
    this.state.list.map((item, index) => {
      view.push(<div
      key={item.value}
        onClick={() => this.onItemPressed(index)}
        style={{
          padding: 8,
          border: '1px solid black',
          marginLeft: index === 0 ? 0 : 8,
          background: item.selected ? PRIMARY_BLUE : 'white'
        }}
      >
        <Text medium color={item.selected ? WHITE : BLACK}>
          {item.value}
        </Text>
      </div>)
    })
    return (
      <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
        {view}
      </div>
    )

  }

  onItemPressed = (index) => {
    if (this.props.single) {
      this.singleSelected(index)
    } else {
      const { list } = this.state
      list[index]['selected'] = !list[index]['selected']
      this.setState(list)
    }
    this.onSelected()
  }

  singleSelected = (indexSelected) => {
    const { list } = this.state
    let updatedData = []
    list.map((item, index) => {
      updatedData.push({
        value: item.value,
        selected: index === indexSelected
      })
    })
    this.setState({list: updatedData})
  }

  /** returning list of selected item */
  onSelected = () => {
    const {list} = this.state
    this.props.onSelected(list)
  }

  render() {
    return (
      this.renderList()
    )
  }
}

export default SelectablePills