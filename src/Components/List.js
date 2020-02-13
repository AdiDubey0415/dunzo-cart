import React, { Component } from "react";
import ListItem from "./ListItem";
import { connect } from "react-redux";

class List extends Component {
  render() {
    console.log("List props", this.props);
    return (
      <div>
        { this.props.items && this.props.items.map((item, index) => {
          return (
            <ListItem key={index} item={item} />
          );
        }) }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    title: "Hello world"
  };
}

export default connect(mapStateToProps)(List);
