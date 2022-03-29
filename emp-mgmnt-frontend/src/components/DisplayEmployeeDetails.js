import React, { Component } from "react";
import { Link } from "react-router-dom";
import { deleteEmployeeDetails } from "../actions/employeeAction";
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class DsiplayEmployeeDetails extends Component {

  ondeleteClick = (companyMailId) => {
    this.props.deleteEmployeeDetails(companyMailId);
    window.location.reload();
  };

  render() {
    const { employee } = this.props;
    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-2">
              Sap Id - <span className="mx-auto">{employee.sapId}</span>
            </div>
            <div className="col-lg-6 col-md-4 col-8">
              Full Name - <h5>{employee.firstName} &nbsp; {employee.lastName}</h5>
              Mail Id -  <h5>{employee.companyMailId}</h5>
              <p></p>
            </div>
            <div className="col-md-4 d-none d-lg-block">
              <ul className="list-group">
                <Link to={`/updateProject/${employee.id}`}>
                  <li className="list-group-item update">
                    <i className="fa fa-edit pr-1">UpdateEmployee</i>
                  </li>
                </Link>
                <li
                  className="list-group-item delete"
                  onClick={this.ondeleteClick.bind(
                    this,
                    employee.companyMailId
                  )}
                >
                  <i className="fa fa-minus-circle pr-1">Delete Employee</i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DsiplayEmployeeDetails.propTypes = {
  deleteProject: PropTypes.func.isRequired,
};

export default connect(null, { deleteEmployeeDetails })(DsiplayEmployeeDetails);