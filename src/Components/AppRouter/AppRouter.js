import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "../Home/Home";

import "./style.css";
import Album from "../About/About";
import Pricing from "../Pricing/Pricing";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="flex-column app-frame">
          <div className="flex-row align-center header container">
            <Link to="/">Header</Link>
          </div>
          <div className="flex flex-row app-main">
            <div className="app-body flex">
              <Switch>
                <Route exact path="/Home" component={Home} />
              </Switch>
              <Switch>
                <Route exact path="/About" component={Album} />
              </Switch>

              <Switch>
                <Route exact path="/Pricing" component={Pricing} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
