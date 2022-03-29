import { combineReducers } from "redux";
import employeeReducer from "./employeeReducer";
import errorReducer from "./errorReducer";
export default combineReducers({
  employees: employeeReducer,
  errors: errorReducer,
});
