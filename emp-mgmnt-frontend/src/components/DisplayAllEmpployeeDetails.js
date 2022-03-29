import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getEmployees } from './../actions/employeeAction';
import DsiplayEmployeeDetails from './DisplayEmployeeDetails';


class DisplayAllEmployeeDetails extends React.Component {
  componentDidMount() {
    this.props.getEmployees()
  }
  render() {
    const { employees } = this.props.employees; 
    console.log("from: ",employees);
    return (
      <div className="employees">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h5 className="display-6 text-center"><b>Employees Info</b></h5><br/> 
            </div>
            {
                employees.map(employee=>{
                  return <DsiplayEmployeeDetails key={employee.id} employee={employee}/>
                })
              }
          </div>
        </div>
      </div>
    );
  }
}
DisplayAllEmployeeDetails.propTypes = {
    getEmployees: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  employees: state.employees,
});

// eslint-disable-next-line no-undef
export default connect(mapStateToProps, { getEmployees })(DisplayAllEmployeeDetails);
