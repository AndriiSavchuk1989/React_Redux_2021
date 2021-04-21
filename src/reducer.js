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
        count: ++state.count,
        action: action.type
      };
    case "DECREMENT":
      return {
        ...state,
        count: --state.count,
        action: action.type
      };
    case "RESET":
      return {
        ...state,
        prop1: state.count,
        count: 0,
        action: action.type
      };
    default:
      return state;
  }
}

export default reducer;
