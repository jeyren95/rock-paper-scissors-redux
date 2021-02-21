import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import "./Home.css";

import {playerSelectScissors, playerSelectRock, playerSelectPaper} from "../actions";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="background-triangle">
          <img src="../images/bg-triangle.svg" alt="" />
        </div>
        <div className="choice scissors">
          <Link to="/start-game">
            <img onClick={() => this.props.playerSelectScissors()} src="../images/icon-scissors.svg" alt="" />
          </Link>
        </div>
        <div className="choice rock">
          <Link to="/start-game">
            <img onClick={() => this.props.playerSelectRock()} src="../images/icon-rock.svg" alt="" />
          </Link>
        </div>
        <div className="choice paper">
          <Link to="/start-game">
            <img onClick={() => this.props.playerSelectPaper()} src="../images/icon-paper.svg" alt="" />
          </Link>
        </div>
      </div>
    )
  }
}

export default connect(null, {playerSelectScissors, playerSelectRock, playerSelectPaper})(Home)
