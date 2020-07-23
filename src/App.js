import React, { Component } from "react";
import "./App.css";
import Status from "./components/Status";
import Players from "./components/printPlayers";
import Button from "@material-ui/core/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      player: null,
      player1: "Player1",
      player1Value: null,
      player2: "Player2",
      player2Value: null,
      winner: null,
    };
  }

  checkWinner() {
    let winLines = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"],
    ];
    this.checkMatch(winLines);
  }

  checkMatch(winLines) {
    for (let index = 0; index < winLines.length; index++) {
      const [a, b, c] = winLines[index];
      let board = this.state.board;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        // alert('You won');
        this.setState({
          winner: this.state.player,
        });
      }
    }
  }

  handleClick(index) {
    if (this.state.player && !this.state.winner) {
      let newBoard = this.state.board;
      if (this.state.board[index] === null) {
        newBoard[index] = this.state.player;
        this.setState({
          board: newBoard,
          player: this.state.player === "X" ? "O" : "X",
        });
        this.checkWinner();
      }
    }
  }
  setPlayer(player) {
    console.log("player", player);
    this.setState({
      player: player.Player1value,
      player1: player.Player1,
      player2: player.Player2,
      player1Value: player.Player1value,
      player2Value: player.Player2value,
    });
  }
  renderBoxes() {
    return this.state.board.map((box, index) => (
      <div className="box" key={index} onClick={() => this.handleClick(index)}>
        {box}{" "}
      </div>
    ));
  }
  reset() {
    this.setState({
      player: null,
      winner: null,
      board: Array(9).fill(null),
    });
  }
  render() {
    return (
      <div className="container">
        <h1 className="spacing">Tic Tac Toe</h1>
        <Status
          player={this.state}
          setPlayer={(e) => {
            this.setPlayer(e);
          }}
          winner={this.state.winner}
        />
        <Players player1={this.state.player1} player2={this.state.player2} />
        <div className="board">{this.renderBoxes()}</div>
        <div className="spacing">
          <Button
            variant="contained"
            size="large"
            disabled={!this.state.winner}
            onClick={() => this.reset()}
          >
            Reset
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
