import React from "react";
import {Route, Router} from "react-router-dom";

import Home from "./Home";
import Header from "./header/Header";
import Rules from "./rules/Rules";
import StartGame from "./StartGame";

import history from "../history"

class App extends React.Component {

  render() {
    return (
      <div>
        <Router history={history}>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/start-game" exact component={StartGame} />
          <Rules />
        </Router>
      </div>
    )
  }
}

export default App;
