import { combineReducers } from "@reduxjs/toolkit";
import employeeReducer from "./employee.reducer";

const rootReducer = combineReducers({
  employee: employeeReducer
});

export default rootReducer;
