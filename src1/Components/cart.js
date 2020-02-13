import React, { Component } from "react";

// Connect to Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Cart extends Component {
  renderListItems = () => {
    return this.props.appState.cartItems.map(item => {
      return (
        <div key={item.id} className="cart-item">
          <span>{item.name}</span>
          <span>{item.price}</span>
          <span>
            <input type="text" value={item.quantity} />
          </span>
          <span>{item.quantity * item.price}</span>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="cart">
        <div className="items-heading">ITEMS</div>
        <div className="items-list">
          { this.renderListItems() }
        </div>
        <div className="total">
          {/* { this.props.appState.totalValue } */}
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
  return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
