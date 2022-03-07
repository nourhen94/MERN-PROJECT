import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import userReducer from "./userReducer";

const reducer = combineReducers({
  productReducer,
  userReducer,
});

export default reducer;
