import React, { Component } from 'react';
import axios from 'axios';
import { parse } from 'url';

class ShowEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = { employees: [] };
  }
  deleteEmployee(id) {
    axios
      .delete(`http://dummy.restapiexample.com/api/v1/delete/${id}`)
      .then(res => console.log(res.data));
    console.log('Employee Deleted');
    console.log(id);
  }

  componentDidMount() {
    try {
      axios
        .get('http://dummy.restapiexample.com/api/v1/employees')
        .then(response => {
          //console.log(response.data);
          this.setState({ employees: response.data });
          console.log(this.state.employees);
        });
    } catch (err) {
      console.log('Fetching Employee Details');
      console.log(err);
    }
  }

  render() {
    return (
      <table class='redTable' align='center'>
        <thead>
          <tr align='left'>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {this.state.employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.employee_name}</td>
              <td>{employee.employee_age}</td>
              <td>{employee.employee_salary}</td>
              <td>
                <button onClick={this.deleteEmployee}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ShowEmployee;
