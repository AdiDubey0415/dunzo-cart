import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default class BasicExample extends React.Component {
  state = { page: "home" }
  
  // componentDidMount = () => {
  //   console.log("CDM", window.history, window.location.pathname);
  //   if (window.location.pathname.length === 1 && window.location.pathname === "/") {
  //     this.setState({
  //       page: "home"
  //     })
  //   } else {
  //     this.setState({
  //       page: window.location.pathname.slice(1)
  //     })
  //   }
  //   window.onpopstate = () => {
  //     console.log("window 123", window.location.pathname);
  //     if (window.location.pathname.length === 1 && window.location.pathname === "/") {
  //       this.setState({
  //         page: "home"
  //       })
  //     } else {
  //       this.setState({
  //         page: window.location.pathname.slice(1)
  //       })
  //     }
  //   }
  // }

  // changePage = (page) => {
  //   window.history.pushState(null, null, page);
  //   console.log("Window history", window.history, window.location.pathname);
  //   this.setState({ page });
  // }

  render() {
    console.log("Window history render", window.history);
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/home">Home</Link>
              {/* <button onClick={() => this.changePage("home")}>Home</button> */}
            </li>
            <li>
              <Link to="/about/aditya">About Aditya</Link>
              {/* <button onClick={() => this.changePage("about")}>About</button> */}
            </li>
            <li>
              <Link to="/about/mayank">About Mayank</Link>
              {/* <button onClick={() => this.changePage("about")}>About</button> */}
            </li>
            <li>
              <Link to="/about/sunil">About Sunil</Link>
              {/* <button onClick={() => this.changePage("about")}>About</button> */}
            </li>
            <li>
              <Link to="/about/rishab">About Rishab</Link>
              {/* <button onClick={() => this.changePage("about")}>About</button> */}
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
              {/* <button onClick={() => this.changePage("dashboard")}>Dashboard</button> */}
            </li>
          </ul>
          {/* <div>
            {
              this.state.page === "home" && <Home />
            }
            {
              this.state.page === "about" && <About />
            }
            {
              this.state.page === "dashboard" && <Dashboard />
            }
          </div> */}
          <div>
            <Route path="/home" exact component={Home} />
            <Route path="/about/:username" component={About} />
            <Route path="/dashboard" component={Dashboard} />
          </div>
        </div>
      </Router>
    );
  }
}

// export default function BasicExample() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//         </ul>

//         <hr />

//         {/*
//           A <Switch> looks through all its children <Route>
//           elements and renders the first one whose path
//           matches the current URL. Use a <Switch> any time
//           you have multiple routes, but you want only one
//           of them to render at a time
//         */}
//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/dashboard">
//             <Dashboard />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// You can think of these components as "pages"
// in your app.

function Home(props) {
  console.log("Home props", props);
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About(props) {
  console.log("About props", props);
  return (
    <div>
      <h2>About {props.match.params.username}</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
