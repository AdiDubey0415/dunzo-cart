import React, { Component } from "react";
import List from "./List";
import Checkout from "./Checkout";

class Cart extends Component {
  render() {
    return (
      <div className="cart">
        <div className="items-heading">CART</div>
        <div className="items-list">
          <List />
        </div>
        <div className="total">
          <Checkout />
        </div>
      </div>
    );
  }
}

export default Cart;
