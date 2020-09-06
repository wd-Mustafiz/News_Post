import React from "react";

import "./App.css";
import Home from "./Component/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NoMatch from "./Component/NoMatch";
import Details from "./Component/Details/Details";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/news/:newId">
            <Details></Details>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
