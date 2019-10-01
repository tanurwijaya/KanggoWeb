import React, { Component } from "react";
import { PRIMARY_BLUE, WHITE } from "../themes/Colors";
import Text from "./Text";
class SelectablePills extends Component {
  state = {
    list: []
  };

  componentDidMount() {
    const { list } = this.props;
    let processedData = [];
    list.forEach((item, index) => {
      processedData.push({
        value: item,
        selected: false
      });
    });
    this.setState({ list: processedData });
  }

  renderList = () => {
    let view = [];
    const {isWrap} = this.props
    // const {isWrap} = this.props
    this.state.list.forEach((item, index) => {
      view.push(
        <div
          key={item.value}
          onClick={() => this.onItemPressed(index)}
          style={{
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft:16,
            paddingRight:16,
            border: `1px solid ${PRIMARY_BLUE}`,
            borderRadius : 4,
            marginRight: 8,
            marginBottom: 8,
            background: item.selected ? PRIMARY_BLUE : "white"
          }}
        >
          <Text medium color={item.selected ? WHITE : PRIMARY_BLUE}>
            {item.value}
          </Text>
        </div>
      );
    });
    return (
      <div style={{ display: "flex", flex: 1, flexWrap: isWrap && "wrap", flexDirection: "row" }}>
        {view}
      </div>
    );
  };

  onItemPressed = index => {
    if (this.props.single) {
      this.singleSelected(index);
    } else {
      const { list } = this.state;
      list[index]["selected"] = !list[index]["selected"];
      this.setState(list, () => this.onSelected());
    }
  };

  singleSelected = indexSelected => {
    const { list } = this.state;
    let updatedData = [];
    list.forEach((item, index) => {
      updatedData.push({
        value: item.value,
        selected: index === indexSelected
      });
    });
    this.setState({ list: updatedData }, () => this.onSelected());
  };

  /** returning list of selected item */
  onSelected = () => {
    const { list } = this.state;
    this.props.onSelected(list);
  };

  render() {
    return this.renderList();
  }
}

export default SelectablePills;
