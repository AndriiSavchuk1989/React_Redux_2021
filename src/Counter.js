import "./styles.css";
import React from "react";
import { increment, decrement, reset } from "./actions";
import { connect } from "react-redux";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

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
        <p>{this.props.empty}</p>
      </div>
    );
  }
}

const mapStateToProps = ({ count, emptyReducer }) => ({
  count: count.count,
  additionalProp: count.prop1,
  action: count.action,
  empty: emptyReducer.defaultProp
});

const mapDispatchToProps = {
  increment,
  decrement,
  reset
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
