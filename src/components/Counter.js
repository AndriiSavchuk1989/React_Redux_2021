import "../styles.css";
import React from "react";
import {
  increment,
  decrement,
  reset,
  fetchAllProducts,
  addNote
} from "../actions/actions";
import { connect } from "react-redux";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, action: "", note: "" };
  }

  componentDidMount() {
    const { props } = this;
    props.fetchAllProducts();
  }

  increment = () => {
    this.setState({ count: this.state.count + 1, action: "increment" });
    this.props.increment();
  };

  decrement = () => {
    this.props.decrement();
    this.setState({ count: this.state.count - 1, action: "decrement" });
  };

  reset = () => {
    this.props.reset();
    this.setState({ count: 0, action: "reset" });
  };

  handleInputChange = (event) => {
    this.setState({ note: event.target.value });
  };

  handleAddNote = () => {
    console.log("notes = ", this.props.notes);
    this.props.addNote(this.state.note);
  };

  render() {
    return (
      <div>
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
        <div>
          <h2> Todo </h2>
          <input type="text" onChange={this.handleInputChange} />
          <button onClick={this.handleAddNote}>add note</button>
          <span>Notes - {this.props.notes.length}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  count: { count, prop1, action },
  emptyReducer,
  note: { notes }
}) => ({
  count: count,
  additionalProp: prop1,
  action: action,
  empty: emptyReducer.defaultProp,
  notes: notes
});

const mapDispatchToProps = {
  increment,
  decrement,
  reset,
  fetchAllProducts,
  addNote
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
