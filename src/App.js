import React from "react";
import * as math from "mathjs";

import Button from "./Button";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      ops: [
        ["7", "8", "9", "/"],
        ["4", "5", "6", "*"],
        ["1", "2", "3", "+"],
        ["^", "0", ".", "-"]
      ],
      input: ""
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    this.setState({ input: math.evaluate(this.state.input) });
  };

  renderButtons = () => {
    return this.state.ops.map(row => {
      return (
        <div className="row">
          {row.map(digit => (
            <Button handleClick={this.addToInput}>{digit}</Button>
          ))}
        </div>
      );
    });
  };

  render() {
    return (
      <div className="App">
        <div className="input">{this.state.input}</div>
        {this.renderButtons()}
        <div className="row">
          <Button
            label="clear-btn"
            handleClick={() => this.setState({ input: "" })}
          >
            Clear
          </Button>
          <Button label="equal-btn" handleClick={this.handleEqual}>
            =
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
