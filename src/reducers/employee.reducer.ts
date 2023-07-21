import { initialStateModal } from "@/constants/constants";
import {
  GET_EMPLOYEES,
  GET_EMPLOYEES_FAIL,
  GET_EMPLOYEES_SUCCESS
} from "@/constants/employeeConstant";

const initialState = {
  employees: {
    ...initialStateModal
  }
};

const settingsHandlingReducer = (state = initialState, action: any) => {
  switch (action.type) {
    //---------- GET_EMPLOYEES ----------
    case GET_EMPLOYEES:
      return {
        ...state,
        employees: {
          ...state.employees,
          loading: true,
          pending: true,
          hasError: false,
          data: [],
          error: {}
        }
      };
    case GET_EMPLOYEES_SUCCESS:
      return {
        ...state,
        employees: {
          ...state.employees,
          loading: false,
          pending: false,
          hasError: false,
          error: {},
          data: action.payload
        }
      };
    case GET_EMPLOYEES_FAIL:
      return {
        ...state,
        employees: {
          ...state.employees,
          loading: false,
          pending: false,
          hasError: true,
          data: [],
          error: action.payload
        }
      };
    default:
      return state;
  }
};

export default settingsHandlingReducer;
