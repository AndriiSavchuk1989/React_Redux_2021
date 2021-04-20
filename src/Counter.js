import "./styles.css";
import React from "react";
import { increment, decrement, reset } from "./actions";
import { connect } from "react-redux";

class Counter extends React.Component {
  state = { count: 0 };

  increment = () => {
    this.props.increment();
  };

  decrement = () => {
    this.props.decrement();
  };

  reset = () => {
    this.props.reset();
  };

  render() {
    console.log("PROPS", this.props);
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

const mapStateToProps = ({ count, prop1, action }) => ({
  count: count,
  additionalProp: prop1,
  action: action
});

const mapDispatchToProps = {
  increment,
  decrement,
  reset
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
