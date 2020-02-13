import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";

export default class App extends React.Component {
  render() {
      return (
        <Router>
        <div>
          <div className="App-header">
            <ul>
              <Link to="/"><li>Home</li></Link>
              <Link to="/about"><li>About</li></Link>
              <Link to="/careers"><li>Careers</li></Link>
              <Link to="/workforce"><li>Workforce</li></Link>
              <Link to="/terms"><li>Terms and Conditions</li></Link>
            </ul>
          </div>
          <Route path="/" exact>
            <div className="home rest">
              This is my company HomePage. We do Web Stuff.
            </div>
          </Route>
          <Route path="/about" exact>
            <div className="about rest">
              This is ABOUT my company. We do Web Stuff.
            </div>
          </Route>
          <Route path="/careers">
            <div className="careers rest">
              Jobs
              <ul style={{"listStyle": "none", "display": "flex", "justifyContent": "space-between"}}>
                <Link to="/careers/frontend"><li>Frontend Dev</li></Link>
                <Link to="/careers/backend"><li>Backend Dev</li></Link>
                <Link to="/careers/fullstack"><li>Full Stack Dev</li></Link>
                <Link to="/careers/devops"><li>Dev Ops Manager</li></Link>
                <Link to="/careers/projectmanager"><li>Project Manager</li></Link>
              </ul>
              <Route path="/careers/frontend">Frontend</Route>
              <Route path="/careers/backend">backend</Route>
              <Route path="/careers/fullstack">fullstack</Route>
              <Route path="/careers/devops">devops</Route>
              <Route path="/careers/projectmanager">projectmanager</Route>
            </div>
          </Route>
          <Route path="/workforce">
            <div className="workforce rest">
              Workforce
              <ul style={{"listStyle": "none", "display": "flex", "justifyContent": "space-between"}}>
                <Link to="/workforce/aditya"><li>Aditya</li></Link>
                <Link to="/workforce/amit"><li>Amit</li></Link>
                <Link to="/workforce/hameed"><li>Hameed</li></Link>
                <Link to="/workforce/mrutunjay"><li>Mrutunjay</li></Link>
                <Link to="/workforce/pratik"><li>Pratik</li></Link>
              </ul>
              <Route path="/workforce/aditya"> About Aditya</Route>
              <Route path="/workforce/amit"> About Amit</Route>
              <Route path="/workforce/hameed"> About Hameed</Route>
              <Route path="/workforce/mrutunjay"> About Mrutunjay</Route>
              <Route path="/workforce/pratik"> About Pratik</Route>
            </div>
          </Route>
          <Route path="/terms" exact>
            <div className="terms rest">
              This is the terms and conditions page.
            </div>
          </Route>
        </div>
      </Router>
    );
  }
}