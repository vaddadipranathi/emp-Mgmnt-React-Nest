import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getEmployeeOnMail } from "./../actions/employeeAction";
import { Link } from "react-router-dom";
import DisplaySearchData from "./displaySearchData";

class SearchEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyMailId: "",
      sapId: 0,
      firstName: "",
      lastName: "",
      desgination: "",
      errors: {}, //form error realted to any field is mapped to the error with this errors object
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
    const { sapId, firstName, lastName, desgination } = nextProps.employee;
    this.setState({
      sapId,
      firstName,
      lastName,
      desgination,
    });
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const employee = {
      companyMailId: this.state.companyMailId,
    };
    this.props.getEmployeeOnMail(employee.companyMailId);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
         
          <div className="form-group">
          <label>Company MailId</label>&nbsp; <input
              type="text"
              class="col-md-3 form-label"
              placeholder="enter company Mail Id"
              name="companyMailId"
              value={this.state.companyMailId}
              onChange={this.onChange}
            />
            &nbsp; &nbsp;
            <button class="btn btn-primary"  type="submit">
            <i class="fa fa-search" aria-hidden="true"></i>Submit
            </button>
          </div>

        <br/>
        </form>
        {this.state.firstName ? (
          <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-2">
              Sap Id - <span className="mx-auto">{this.state.sapId}</span>
            </div>
            <div className="col-lg-6 col-md-4 col-8">
              Desgination- <h5>{this.state.desgination}</h5>
              Mail Id -  <h5>{this.state.companyMailId}</h5>
              Full Name -  <h5>{this.state.firstName} &nbsp; {this.state.lastName}</h5>
              <p></p>
            </div>
            <div className="col-md-4 d-none d-lg-block">
              <ul className="list-group">
                <Link to={`/updateProject/${this.state.id}`}>
                  <li className="list-group-item update">
                    <i className="fa fa-edit pr-1">UpdateEmployee</i>
                  </li>
                </Link>
                <li className="list-group-item update">
                  <i className="fa fa-minus-circle pr-1">Delete Employee</i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        ) : (
          <p></p>
        )}
      </div>
    );
  }
}

SearchEmployee.propTypes = {
  getEmployeeOnMail: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  employee: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  employee: state.employees.employee,
  errors: state.errors,
});
export default connect(mapStateToProps, { getEmployeeOnMail })(SearchEmployee);
