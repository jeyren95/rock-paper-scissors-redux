import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import "./StartGame.css";

import {houseSelectScissors, houseSelectRock, houseSelectPaper, playerWins, playerLoses, playerDraws} from "../actions";

class StartGame extends React.Component {
  renderHouseChoice() {
    const houseChoice = Math.ceil(Math.random()*3);

    if (houseChoice === 1) {
      this.props.houseSelectScissors();
    } else if (houseChoice === 2) {
      this.props.houseSelectRock();
    } else if (houseChoice === 3) {
      this.props.houseSelectPaper();
    }
  }

  renderResults() {
    if (this.props.playerChoice === this.props.houseChoice) {
      this.props.playerDraws();
    } else if (this.props.playerChoice === "scissors" && this.props.houseChoice === "paper") {
      this.props.playerWins();
    } else if (this.props.playerChoice === "rock" && this.props.houseChoice === "scissors") {
      this.props.playerWins();
    } else if (this.props.playerChoice === "paper" && this.props.houseChoice === "rock") {
      this.props.playerWins();
    } else {
      this.props.playerLoses();
    }
  }

  async componentDidMount() {
    await this.renderHouseChoice();
    this.renderResults();
  }

  render() {
    return (
      <div className="start-game">
        <div className="row">
          <div className="col player-choice">
            <h1>YOU PICKED</h1>
            <div className={`selected-choice selected-${this.props.playerChoice}`}>
              <img src={`../images/icon-${this.props.playerChoice}.svg`} alt="" />
            </div>
          </div>

          <div className="col house-choice">
            <h1>THE HOUSE PICKED</h1>
            <div className={`selected-choice selected-${this.props.houseChoice}`}>
              <img src={`../images/icon-${this.props.houseChoice}.svg`} alt="" />
            </div>
          </div>
        </div>

        <div className="results">
          <h1>{this.props.results}</h1>
          <div className="play-again">
            <Link to="/">
              <button className="ui inverted button">PLAY AGAIN</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    playerChoice: state.playerChoice,
    houseChoice: state.houseChoice,
    results: state.results
  })
}

export default connect(mapStateToProps, {houseSelectScissors, houseSelectRock, houseSelectPaper, playerWins, playerLoses, playerDraws})(StartGame)
