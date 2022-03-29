/* eslint-disable react/jsx-no-undef */
import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router,Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import HeaderComponent from './components/headerComponent';
import DisplayAllEmployeeDetails from "./components/DisplayAllEmpployeeDetails";
import AddEmployee from './components/AddEmployee';
import SearchEmployee from './components/searchEmployee';
import DisplaySearchData from './components/displaySearchData';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <HeaderComponent/>
        <Route exact path="/allEmployees" component={DisplayAllEmployeeDetails} />
        <Route path="/addEmployees" component={AddEmployee} />
        <Route path="/searchEmployee" component={SearchEmployee} />
        <Route path="/displayEmployeeData" component={DisplaySearchData} />
      </Router>
    </Provider>
  );
}

export default App;
