import React from "react";

class Counter1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5,
    };
  }

  printName(data) {
    if (data.player == data.player1Value) {
      return data.player2;
    } else {
      return data.player1;
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.count > 0) {
        this.setState({
          count: this.state.count - 1,
        });
        if (this.state.count == 0) {
        }
      }
    }, 1000);
  }

  componentWillMount() {
    clearInterval(this.interval);
  }
  render() {
    if (this.state.count == 0) {
      return (
        <div>
          <h1>Winner is {this.printName(this.props.player)}</h1>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Time Left: {this.state.count}</h1>
        </div>
      )
    }
  }
}

export default Counter1;
