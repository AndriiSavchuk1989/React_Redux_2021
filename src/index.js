import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Counter from "./Counter";
import store from "./store";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Counter />
    </Provider>
  </StrictMode>,
  rootElement
);
