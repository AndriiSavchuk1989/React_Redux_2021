import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Counter from "./Counter";

const rootElement = document.getElementById("root");

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  console.log("reducer", state, action);

  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Counter />
    </Provider>
  </StrictMode>,
  rootElement
);
