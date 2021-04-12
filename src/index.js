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
  return state;
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
