const initialState = { name: "", price: 0 };

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_FORM_VALUES":
      const { field, value } = action.payload;
      return { ...state, [field]: value };
    case "EDIT":
      return { name: action.payload.value, price: action.payload.price };
    default:
      return state;
  }
}
