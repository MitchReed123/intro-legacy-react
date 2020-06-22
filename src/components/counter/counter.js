import React, { Component } from "react";
import CounterDisplay from "./counterDisplay/counterDisplay";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <CounterDisplay
          increment={this.increment}
          decrement={this.decrement}
          count={this.state.count}
        />
      </div>
    );
  }
}
