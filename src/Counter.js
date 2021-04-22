import "./styles.css";
import React from "react";
import { increment, decrement, reset } from "./actions";
import { connect } from "react-redux";
import store from "./store";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  getStoreState = () => {
    console.log("store.getState()", store.getState());
    let { count } = store.getState();
    return count;
  };

  changeCounter = (count) => {
    this.setState({ ...this.state, count: count.count });
  };

  increment = () => {
    this.props.increment();
    this.changeCounter(this.getStoreState());
  };

  decrement = () => {
    this.props.decrement();
    this.changeCounter(this.getStoreState());
  };

  reset = () => {
    this.props.reset();
    this.changeCounter(this.getStoreState());
  };

  render() {
    console.log("PROPS", this.props);
    console.log("STORE", store.getState());
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

const mapStateToProps = ({ count }) => ({
  count: count.count,
  additionalProp: count.prop1,
  action: count.action
});

const mapDispatchToProps = {
  increment,
  decrement,
  reset
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
