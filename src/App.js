import React, { Component } from "react";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="App-header">
            <ul>
              <Link to="/home"><li>Home</li></Link>
              <Link to="/about"><li>About</li></Link>
              <Link to="/careers"><li>Careers</li></Link>
              <Link to="/workforce"><li>Workforce</li></Link>
              <Link to="/terms"><li>Terms and Conditions</li></Link>
            </ul>
          </div>
          <div>
            <Route path="/home">
              <div className="home rest">This is my company HomePage. We do Web Stuff.</div>
            </Route>
            <Route path="/about">
              <div className="about rest">
                This is ABOUT my company. We do Web Stuff.
              </div>
            </Route>
            <Route path="/careers">
              <div className="careers rest">Jobs
                <div>
                  <ul>
                    <Link to="/careers/frontend"><li>Frontend</li></Link>
                    <Link to="/careers/backend"><li>Backend</li></Link>
                    <Link to="/careers/fullstack"><li>Full Stack</li></Link>
                    <Link to="/careers/devops"><li>Dev Ops</li></Link>
                    <Link to="/careers/projectmanager"><li>Project Manager</li></Link>
                  </ul>
                  <div>
                    <Route path="/careers/frontend"><div>For Frontend</div></Route>
                    <Route path="/careers/backend"><div>For Backend</div></Route>
                    <Route path="/careers/fullstack"><div>For FullStack</div></Route>
                    <Route path="/careers/devops"><div>For DevOps</div></Route>
                    <Route path="/careers/projectmanagere"><div>For Projectmanager</div></Route>
                  </div>
                </div>
              </div>
            </Route>
            <Route path="/workforce">
              <div className="workforce rest">Workforce
                <div>
                  <ul>
                    <li>Aditya</li>
                    <li>Amit</li>
                    <li>Hameed</li>
                    <li>Mrutunjay</li>
                    <li>Pratik</li>
                  </ul>
                </div>
              </div>
            </Route>
            <Route path="/terms">
              <div className="terms rest">Terms</div>
            </Route>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
