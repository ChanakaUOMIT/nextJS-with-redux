import { combineReducers } from "@reduxjs/toolkit";
import employeeReducer from "./employee.reducer";

export const rootReducer = combineReducers({
  employee: employeeReducer
});
