import { getEmployeesAPI } from "@/apis/employee.api";
import {
  GET_EMPLOYEES,
  GET_EMPLOYEES_FAIL,
  GET_EMPLOYEES_SUCCESS
} from "@/constants/employeeConstant";
import { put, call, takeEvery } from "redux-saga/effects";

export function* getEmployees(obj: any): any {
  try {
    const data = yield call(() => getEmployeesAPI());
    yield put({ type: GET_EMPLOYEES_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: GET_EMPLOYEES_FAIL, payload: error });
  }
}

function* userSaga() {
  yield takeEvery(GET_EMPLOYEES, getEmployees);
}

export default userSaga;
