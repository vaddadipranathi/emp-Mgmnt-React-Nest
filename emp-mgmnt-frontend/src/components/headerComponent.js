import React from "react";
import { Link } from "react-router-dom";
class HeaderComponent extends React.Component {
  render() {
    return (
      //   Nav Bar Component
      <div > <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
      <div className="container">
        <a className="navbar-brand" href="Dashboard.html">
          Employee Management Tool
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-nav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mobile-nav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/allEmployees" className="nav-link">
                AllEmployeeDetails
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/addEmployees" className="nav-link">
                AddEmployee
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/searchEmployee" className="nav-link">
               Search Employee
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    </div>
     
    );
  }
}
export default HeaderComponent;
