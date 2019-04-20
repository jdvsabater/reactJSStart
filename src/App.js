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
    axios
      .post('http://dummy.restapiexample.com/api/v1/create', employee)

      .then(res => console.log(res.data));
    console.log(employee);
  }

  updateEmployee(id, details) {
    try {
      axios({
        method: 'put',
        url: `http://dummy.restapiexample.com/api/v1/update/${id}`,
        data: details
      }).then(response => {
        console.log('Employee updated details');
        console.log(response.data);
      });
    } catch (err) {
      console.log('Fail to update Employee Details');
      console.log(err);
    }
  }

  deleteEmployee(id) {
    try {
      axios({
        method: 'delete',
        url: `http://dummy.restapiexample.com/api/v1/delete/${id}`
      }).then(response => {
        console.log('Employee details removed');
        console.log(response.data);
      });
    } catch (err) {
      console.log('Fail to remove Employee Details');
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
          type='button'
          onClick={this.showModal}
          value='Create New Employee'
        />
        <Modal onClose={this.showModal} show={this.state.show}>
          <CreateNewEmployee addNewEmployee={this.addNewEmployee} />
        </Modal>

        <hr />
        <ShowEmployee />
      </div>
    );
  }
}

export default App;
