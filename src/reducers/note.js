const initialState = {
  notes: [],
  quantity: 0
};

function note(state = initialState, action) {
  console.log("note", state, action);

  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.payload],
        quantity: state.notes.length + 1
      };
    default:
      return state;
  }
}

export default note;
