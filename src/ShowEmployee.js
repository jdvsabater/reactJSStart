import React, { Component } from 'react';
import axios from 'axios';

class ShowEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = { employees: [] };
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
      <table>
        {this.state.employees.map(employee => (
          <tr key={employee.id}>
            <td>{employee.employee_name}</td>
            <td>{employee.employee_salary}</td>
            <td>{employee.employee_age}</td>
          </tr>
        ))}
      </table>
    );
  }
}

export default ShowEmployee;
