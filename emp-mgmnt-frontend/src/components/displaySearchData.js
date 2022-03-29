import React, { Component } from 'react'
import SearchEmployee from './searchEmployee';
import { Link } from "react-router-dom";

export default class DisplaySearchData extends Component {
    render() {
       const {employee}=this.props;
        return (
            <div>
            <div className="container">
            <div className="card card-body bg-light mb-3">
              <div className="row">
                <div className="col-2">
                  Sap Id - <span className="mx-auto">{employee.sapId}</span>
                </div>
                <div className="col-lg-6 col-md-4 col-8">
                  Desgination- <h5>{employee.desgination}</h5>
                  Mail Id -  <h5>{employee.companyMailId}</h5>
                  Full Name -  <h5>{employee.firstName} &nbsp; {employee.lastName}</h5>
                  <p></p>
                </div>
                <div className="col-md-4 d-none d-lg-block">
                  <ul className="list-group">
                    <Link to={`/updateProject/${employee.id}`}>
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
          </div>
            </div>
        )
    }
}
