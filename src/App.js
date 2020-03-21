import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Catalog from "./Catalog.js";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/">
          <Catalog />
        </Route>
      </Router>
    );
  }
}

export default App;
