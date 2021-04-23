const initialState = {
  defaultProp: "default prop"
};

function emptyReducer(state = initialState, action) {
  console.log("count", state, action);

  switch (action.type) {
    default:
      return state;
  }
}

export default emptyReducer;
