import { all } from "redux-saga/effects";

import employeeSaga from "./employee.saga";

export default function* rootSaga() {
  yield all([employeeSaga()]);
}
