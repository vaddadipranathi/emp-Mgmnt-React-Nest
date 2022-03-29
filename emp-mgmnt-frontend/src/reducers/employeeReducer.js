/* eslint-disable import/no-anonymous-default-export */

import { GET_EMPLOYEES, GET_EMPLOYEE, DELETE_EMPLOYEE } from "../actions/types";

const initialState = {
  employees: [],
  employee: {},
  message:{},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
      };
    case GET_EMPLOYEE:
      return {
        ...state,
        employee: action.payload,
      };
      case DELETE_EMPLOYEE:
        return {
          ...state,
          employees: state.employees.filter(
            (employee) => employee.projectIdentifier != action.payload
          ),
        };
    default:
      return state;
  }
}
