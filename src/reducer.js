const initialState = {
  count: 0,
  prop1: "prop1",
  action: ""
};

function reducer(state = initialState, action) {
  console.log("reducer", state, action);

  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
        action: "increment"
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
        action: "decrement"
      };
    case "RESET":
      return {
        ...state,
        count: 0,
        action: "reset"
      };
    default:
      return state;
  }
}

export default reducer;
