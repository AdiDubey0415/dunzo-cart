import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import store from "./Redux/index";
// import { Provider } from "react-redux";

ReactDOM.render(<App />, document.getElementById('root'));

/*
Requirements -

1. On click of a link, we need to change the UI
2. We should also be able to go back and forth in the browser
3. URL is not getting updated based on the page, or the link we clicked on

window.history
window.location
window.onpopstate
window.history.pushstate

How to go to default route with react-router?

*/