import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ShowEmployee from './components/ShowEmployee';
import CreateNewEmployee from './components/CreateNewEmployee';
import Modal from './components/modals/Modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { employeeList: [] };
    this.addNewEmployee = this.addNewEmployee.bind(this);
  }

  addNewEmployee(name, age, salary) {
    const employee = {
      name: name,
      age: age,
      salary: salary
    };
    try {
      axios
        .post('http://dummy.restapiexample.com/api/v1/create', employee)
        .then(res => {
          this.getEmployees();
          console.log(res.data);
          console.log(employee);
        });
    } catch (err) {
      console.log('Fail to Add Employee');
      alert('Error!!!');
    }
  }

  getEmployees() {
    try {
      axios
        .get('http://dummy.restapiexample.com/api/v1/employees')
        .then(response => {
          this.setState({ employees: response.data });
          console.log(this.state.employees);
        });
    } catch (err) {
      console.log('Fetching Employee Details');
      console.log(err);
    }
  }

  state = {
    show: false
  };

  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  render() {
    return (
      <div>
        <input
          className='myButton'
          type='button'
          onClick={this.showModal}
          value='Create New Employee'
        />

        <hr />
        <br />
        <center>
          <h1>
            <span className='demoObject'>Employee Management</span>
          </h1>
        </center>

        <ShowEmployee />
        <Modal onClose={this.showModal} show={this.state.show}>
          <CreateNewEmployee addNewEmployee={this.addNewEmployee} />
        </Modal>
      </div>
    );
  }
}

export default App;
