import { createStore, combineReducers } from "redux";
import formReducer from "./formReducer";
import listReducer from "./listReducer";
import stateReducer from "./stateReducer";

const rootReducer = combineReducers({
  formReducer,
  listReducer,
  stateReducer,
});

const store = createStore(rootReducer);

export default store;
