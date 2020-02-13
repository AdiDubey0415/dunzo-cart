import React, { Component } from 'react';
import './App.css';
import Header from "./Components/header";
import Items from "./Components/items";
import Cart from "./Components/cart";

// Connect to Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class App extends Component {
  render() {
    console.log("in app", this.props);
    return (
      <div className="wrapper">
      <Header />
      <div className="body-wrapper">
        <Items />
        <Cart />
      </div>
    </div>
    );
  }
}

// Here we connect the state that was made in 'Reducers/index.js' and sent through 'src/index.js', through <Provider> to this component(App component).
const getStateFromRedux = (state) => {
  console.log("mapstop", state);
  return {
    appState: state.appState
  }
}

// Here we bind the actions(events triggered from the view by the user) to the corresponding action creators which then get dispatched and are sent to all the reducers.
const giveActionsToRedux = (dispatch) => {
  console.log("giveActionsToRedux", dispatch);
  return bindActionCreators({ }, dispatch);
}

export default connect(getStateFromRedux, giveActionsToRedux)(App);
// export default App;
