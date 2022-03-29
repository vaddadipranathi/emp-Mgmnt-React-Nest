import React, { Component } from "react";
import { addEmployees } from "../actions/employeeAction";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phoneNum: 0,
      personalEmailId: "",
      gender: "",
      address: "",
      sapId: 0,
      desgination: "",
      salary: "",
      experince: "",
      dateofJoining: "",
      errors: {}, //form error realted to any field is mapped to the error with this errors object
    };
  }
  //this method will work before this component recieve new props
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNum: this.state.phoneNum,
      personalEmailId: this.state.personalEmailId,
      gender: this.state.gender,
      address: this.state.address,
      sapId: this.state.sapId,
      desgination: this.state.desgination,
      salary: this.state.salary,
      experince: this.state.experince,
      dateofJoining: this.state.dateofJoining,
    };
    this.props.addEmployees(employee, this.props.history);
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h6 className="display-6 text-center"><b>Add Employee Details</b></h6>
              <hr />
              <form onSubmit={this.onSubmit}>
                <h6>FirstName</h6>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg ", {
                      "is-invalid": errors.firstName,
                    })}
                    placeholder="enter your firstName"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.onChange}
                  />
                  {errors.firstName && (
                    <div className="invalid-feedback">
                      {errors.firstName}
                    </div>
                  )}
                </div>
                <h6>LastName</h6>
                <div className="form-group">
                <input
                  type="text"
                  className={classnames("form-control form-control-lg ", {
                    "is-invalid": errors.lastName,
                  })}
                  placeholder="enter your lastName"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.onChange}
                />
                {errors.lastName && (
                  <div className="invalid-feedback">
                    {errors.lastName}
                  </div>
                )}
              </div>
                <h6>Phone Number</h6>
                <div className="form-group">
                  <textarea
                    className={classnames("form-control form-control-lg ", {
                      "is-invalid": errors.phoneNum,
                    })}
                    placeholder="enter your phoneNum"
                    name="phoneNum"
                    value={this.state.phoneNum}
                    onChange={this.onChange}
                  ></textarea>
                  {errors.phoneNum && (
                    <div className="invalid-feedback">{errors.phoneNum}</div>
                  )}
                </div>
                <h6>Personal EmailId</h6>
                <div className="form-group">
                  <textarea
                    className={classnames("form-control form-control-lg ", {
                      "is-invalid": errors.personalEmailId,
                    })}
                    placeholder="enter your personal EmailId"
                    name="personalEmailId"
                    value={this.state.personalEmailId}
                    onChange={this.onChange}
                  ></textarea>
                  {errors.personalEmailId && (
                    <div className="invalid-feedback">{errors.personalEmailId}</div>
                  )}
                </div>

                <h6>Gender</h6>
                <div className="form-group">
                  <textarea
                    className={classnames("form-control form-control-lg ", {
                      "is-invalid": errors.gender,
                    })}
                    placeholder="enter your gender"
                    name="gender"
                    value={this.state.gender}
                    onChange={this.onChange}
                  ></textarea>
                  {errors.gender && (
                    <div className="invalid-feedback">{errors.gender}</div>
                  )}
                </div>

                <h6>Address</h6>
                <div className="form-group">
                  <textarea
                    className={classnames("form-control form-control-lg ", {
                      "is-invalid": errors.address,
                    })}
                    placeholder="enter your address"
                    name="address"
                    value={this.state.address}
                    onChange={this.onChange}
                  ></textarea>
                  {errors.address && (
                    <div className="invalid-feedback">{errors.address}</div>
                  )}
                </div>

                <h6>SapId</h6>
                <div className="form-group">
                  <textarea
                    className={classnames("form-control form-control-lg ", {
                      "is-invalid": errors.sapId,
                    })}
                    placeholder=" enter your sapId"
                    name="sapId"
                    value={this.state.sapId}
                    onChange={this.onChange}
                  ></textarea>
                  {errors.sapId && (
                    <div className="invalid-feedback">{errors.sapId}</div>
                  )}
                </div>

                <h6>Desgination</h6>
                <div className="form-group">
                  <textarea
                    className={classnames("form-control form-control-lg ", {
                      "is-invalid": errors.desgination,
                    })}
                    placeholder="enter your desgination"
                    name="desgination"
                    value={this.state.desgination}
                    onChange={this.onChange}
                  ></textarea>
                  {errors.desgination && (
                    <div className="invalid-feedback">{errors.desgination}</div>
                  )}
                </div>

                <h6>Salary</h6>
                <div className="form-group">
                  <textarea
                    className={classnames("form-control form-control-lg ", {
                      "is-invalid": errors.salary,
                    })}
                    placeholder=" enter your salary"
                    name="salary"
                    value={this.state.salary}
                    onChange={this.onChange}
                  ></textarea>
                  {errors.salary && (
                    <div className="invalid-feedback">{errors.salary}</div>
                  )}
                </div>

                <h6>Experince</h6>
                <div className="form-group">
                  <textarea
                    className={classnames("form-control form-control-lg ", {
                      "is-invalid": errors.experince,
                    })}
                    placeholder="enter your experince"
                    name="experince"
                    value={this.state.experince}
                    onChange={this.onChange}
                  ></textarea>
                  {errors.experince && (
                    <div className="invalid-feedback">{errors.experince}</div>
                  )}
                </div>

                <h6>Date of Joining</h6>
                <div className="form-group">
                  <textarea
                    className={classnames("form-control form-control-lg ", {
                      "is-invalid": errors.dateofJoining,
                    })}
                    placeholder=" enter your dateofJoining"
                    name="dateofJoining"
                    value={this.state.dateofJoining}
                    onChange={this.onChange}
                  ></textarea>
                  {errors.dateofJoining && (
                    <div className="invalid-feedback">{errors.dateofJoining}</div>
                  )}
                </div>
                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


AddEmployee.propTypes = {
    addEmployees: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    errors: state.errors,
  });
export default connect(mapStateToProps, { addEmployees })(AddEmployee);