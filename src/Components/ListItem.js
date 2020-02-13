import React, { Component } from "react";

class ListItem extends Component {
  render() {
    return (
      <div>{this.props.item.name} --- {this.props.item.price}</div>
    );
  }
}

export default ListItem;
