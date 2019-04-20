import React, { Component } from 'react';
import axios from 'axios';
import { parse } from 'url';

class ShowEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = { employees: [], id: '' };
  }

  getEmployees() {
    return this.state.employees;
  }

  deleteEmployee(id) {
    let getter = this.getEmployees();

    let test = getter.filter(get => {
      return get.id !== id;
    });

    axios
      .delete(`http://dummy.restapiexample.com/api/v1/delete/${test}`)
      .then(res => console.log(res.data));
    console.log('Employee Deleted');
    console.log(test);
  }

  componentDidMount() {
    try {
      axios
        .get('http://dummy.restapiexample.com/api/v1/employees')
        .then(response => {
          console.log(response.data);
          this.setState({ employees: response.data });
        });
    } catch (err) {
      console.log('Fetching Employee Details');
      console.log(err);
    }
  }
  render() {
    return (
      <table id='customers' align='center'>
        <thead>
          <tr align='left'>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Menu</th>
          </tr>
        </thead>
        <tbody>
          {this.state.employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.employee_name}</td>
              <td>{employee.employee_age}</td>
              <td>{employee.employee_salary}</td>
              <td align='center'>
                <button>Edit</button> |{' '}
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
