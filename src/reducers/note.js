const initialState = {
  notes: []
};

function note(state = initialState, action) {
  console.log("note", state, action);

  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.payload]
      };
    default:
      return state;
  }
}

export default note;
