import { useSelector, useDispatch } from "react-redux";

export default function ServiceForm() {
  const dispatch = useDispatch();
  const { name, price } = useSelector((store) => store.formReducer);
  const { is_edit, id_edit } = useSelector((store) => store.stateReducer);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE_FORM_VALUES", payload: { field: name, value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (is_edit) {
      dispatch({ type: "UPDATE", payload: { id_edit, name, price } });
    } else {
      dispatch({ type: "ADD_ITEM", payload: { name, price } });
    }
    handleCancel();
  };
  const handleCancel = () => {
    let value = "";
    let price = 0;
    dispatch({
      type: "EDIT",
      payload: { value, price },
    });
    dispatch({ type: "IS_EDIT", payload: { edit: 0, id: 0 } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={handleChange} />{" "}
      <input name="price" value={price} onChange={handleChange} />{" "}
      <button type="submit">Save</button>
      {is_edit ? <button onClick={handleCancel}>Cancel</button> : ""}
    </form>
  );
}
