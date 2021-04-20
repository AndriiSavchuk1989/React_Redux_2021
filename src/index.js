import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Counter from "./Counter";
import reducer from "./reducer";

const rootElement = document.getElementById("root");

const store = createStore(reducer);

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Counter />
    </Provider>
  </StrictMode>,
  rootElement
);
