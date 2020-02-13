import React, { Component } from "react";
import List from "./List";

class Items extends Component {
  render() {
    return (
      <div className="items">
        <div className="items-heading">ITEMS</div>
        <div className="items-list">
          <List />
        </div>
      </div>
    );
  }
}

export default Items;
