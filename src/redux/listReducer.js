const initialState = [
  { id: Math.random(), name: "Замена батареи", price: 1000 },
  { id: Math.random(), name: "Замена дисплея", price: 1000 },
  { id: Math.random(), name: "Посмотреть", price: 1000 },
];

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      const item = action.payload;
      return [...state, { ...item, id: Math.random() }];
    case "DELETE":
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    case "UPDATE":
      const id_update = action.payload;
      let new_state = state.map((item) =>
        item.id === id_update.id_edit
          ? { id: item.id, name: id_update.name, price: +id_update.price }
          : item
      );
      return new_state;
    default:
      return state;
  }
}
