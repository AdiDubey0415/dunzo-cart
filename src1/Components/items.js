import React, { Component } from "react";
import { changeItemQuantity } from "../ActionCreators/actions";

// Connect to Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Items extends Component {
  renderItemsList = () => {
    let { cartItems } = this.props.appState;
    return this.props.appState.items.map(item => {
      let isItemPresentInCart = false;
      let quantity = 0;
      for(let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id === item.id) {
          isItemPresentInCart = true
          quantity = cartItems[i].quantity;
        }
      }
      return (
        <div key={item.id} className={`item + ${isItemPresentInCart ? "cart-present" : "cart-absent"}`}>
          <span>{item.name}</span>
          <span>{item.price}</span>
          <span>
            <button onClick={() => this.props.changeItemQuantity(item.id, -1, false)}>-</button>
            <input type="number" value={quantity} onChange={(e) => this.props.changeItemQuantity(item.id, e.target.value, true)} />
            <button onClick={() => this.props.changeItemQuantity(item.id, 1, false)}>+</button>
          </span>
        </div>
      );
    })
  }
  render() {
    return (
      <div className="items">
        <div className="items-heading">ITEMS</div>
        <div className="items-list">
          { this.renderItemsList() }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    appState: state.appState
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ changeItemQuantity }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);
