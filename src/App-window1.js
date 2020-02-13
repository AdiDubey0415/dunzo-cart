import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    page: "home"
  }

  componentDidMount = () => {
    console.log("In CDM", window.location.pathname);
    if (window.location.pathname.length === 1 && window.location.pathname === "/") {
      this.setState({
        page: "home"
      });
    } else {
      this.setState({
        page: window.location.pathname.slice(1)
      });
    }
    window.onpopstate = () => {
      console.log(window.location.pathname)
      if (window.location.pathname.length === 1 && window.location.pathname === "/") {
        this.setState({
          page: "home"
        });
      } else {
        this.setState({
          page: window.location.pathname.slice(1)
        });
      }
    }
  }

  changePage = (page) => {
    console.log("Window History object", window.history);
    window.history.pushState(null, null, page);
    this.setState({
      page
    });
  }

  render() {
    console.log("Render called");
    return (
      <div>
        <div className="App-header">
          <ul>
            <li onClick={() => this.changePage("home")}>Home</li>
            <li onClick={() => this.changePage("about")}>About</li>
            <li onClick={() => this.changePage("careers")}>Careers</li>
            <li onClick={() => this.changePage("workforce")}>Workforce</li>
            <li onClick={() => this.changePage("terms")}>Terms and Conditions</li>
          </ul>
        </div>
        <div>
          {
            this.state.page === "home" && (
              <div className="home rest">This is my company HomePage. We do Web Stuff.</div>
            )
          }
          {
            this.state.page === "about" && (
            <div className="about rest">
              This is ABOUT my company. We do Web Stuff.
            </div>
            )
          }
          {
            this.state.page === "careers" && (
            <div className="careers rest">Jobs
              <div>
                <ul>
                  <li>Frontend</li>
                  <li>Backend</li>
                  <li>Full Stack</li>
                  <li>Dev Ops</li>
                  <li>Project Manager</li>
                </ul>
              </div>
            </div>
            )
          }
          {
            this.state.page === "workforce" && (
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
            )
          }
          {
            this.state.page === "terms" && (
              <div className="terms rest">Terms</div>
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
