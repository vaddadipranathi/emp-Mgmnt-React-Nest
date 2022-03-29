import axios from "axios";
import { GET_EMPLOYEES, GET_ERRORS, GET_EMPLOYEE,DELETE_EMPLOYEE} from "./types";

export const getEmployees = () => async (dispatch) => {
  const res = await axios.get("employee/getAllEmployeeDetails");
  dispatch({
    type: GET_EMPLOYEES,
    payload: res.data,
  });
};

export const addEmployees = (employee, history) => async (dispatch) => {
  try {
    await axios.post("employee/addEmployeeDetails", employee);
    history.push("/allEmployees");
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};

export const getEmployeeOnMail = (companyMailId) => async (dispatch) => {
  const res = await axios.get(`/employee/getBasedOnCompanyMailId/${companyMailId}`);
  dispatch({
    type: GET_EMPLOYEE,
    payload: res.data,
  });
};

export const deleteEmployeeDetails = (companyMailId) => async (dispatch) => {
  if (window.confirm("are you sure")) {
    const res = await axios.delete(`/employee/deleteEmpOnCompanyMail/${companyMailId}`);
    dispatch({
      type: DELETE_EMPLOYEE,
      payload: res.data,
    });
  }
};

