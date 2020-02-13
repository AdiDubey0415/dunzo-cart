import React, { Component } from "react";
import Cart from "./Components/Cart";
import Items from "./Components/Items";
import "./App.css";
import { items } from "./data.js";
import { connect } from "react-redux";

class App extends Component {
  state = {
    cartItems: [],
    totalValue: ""
  }

  componentDidMount = () => {
    // Make api call here
    this.props.dispatch({
      type: "add_items_first_time",
      payload: items
    })
  }

  render() {
    console.log("App props", this.props);
    return (
      <div className="wrapper">
        <div className="body-wrapper">
          <Items />
          <Cart />
        </div>
      </div>
    );
  }
}

console.log("aasa", connect()(App));

export default connect()(App);