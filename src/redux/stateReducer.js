const initialState = { is_edit: 0, id: 0 };

export default function stateReducer(state = initialState, action) {
  switch (action.type) {
    case "IS_EDIT":
      return { is_edit: action.payload.edit };
    case "SET_ID":
      return { is_edit: action.payload.edit, id_edit: action.payload.id };
    default:
      return state;
  }
}
