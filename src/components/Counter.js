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
    this.myRef = React.createRef();
    console.log("props = ", props);
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
    const value = event.target.value;
    if (value.length) {
      this.setState({ note: value });
    }
  };

  handleAddNote = () => {
    if (this.state.note.length) {
      this.props.addNote(this.state.note);
      this.setState({ note: "" });
      this.myRef.current.value = "";
    }
  };

  createEditorButtons = () => {
    return (
      <span>
        <button>edit</button>
        <button>x</button>
      </span>
    );
  };

  createList = (items) => {
    const list = items.map((item) => (
      <li key={item}>
        {item}
        {this.createEditorButtons()}
      </li>
    ));
    return <ul>{list}</ul>;
  };

  render() {
    const notesLength = this.props.notes.length;
    const notes = this.props.notes;
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
          <input
            type="text"
            onChange={this.handleInputChange}
            ref={this.myRef}
          />
          <button onClick={this.handleAddNote}>add note</button>
          <p>Notes - {notesLength}</p>
          {notesLength > 0 && this.createList(notes)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  count: { count, prop1, action },
  emptyReducer,
  note: { notes, quantity }
}) => ({
  count: count,
  additionalProp: prop1,
  action: action,
  empty: emptyReducer.defaultProp,
  notes: notes,
  notesLength: quantity
});

const mapDispatchToProps = {
  increment,
  decrement,
  reset,
  fetchAllProducts,
  addNote
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
