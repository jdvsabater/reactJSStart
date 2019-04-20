import React, { Component } from 'react';
import axios from 'axios';

const tableStyle = {
  width: '50%',
  align: 'justify',
  color: 'grey'
};

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
      <table style={tableStyle}>
        <thead>
          <tr align='left'>
            <th>Employee Name</th>
            <th>Age</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {this.state.employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.employee_name}</td>
              <td>{employee.employee_age}</td>
              <td>{employee.employee_salary}</td>
              <td>
                <button>Edit</button>
              </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ShowEmployee;
