import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ShowEmployee from './components/ShowEmployee';
import Modal from './components/modals/Modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { employeeList: [] };
  }

  createNewEmployee(details) {
    try {
      axios({
        method: 'post',
        url: 'http://dummy.restapiexample.com/api/v1/create',
        data: details
      }).then(response => {
        console.log('Add Employee Details');
        console.log(response.data);
      });
    } catch (err) {
      console.log('Fail to add Employee Details');
      console.log(err);
    }
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
        <input type='button' onClick={this.showModal} value='Show Modal' />
        <Modal onClose={this.showModal} show={this.state.show}>
          <ShowEmployee />
        </Modal>
      </div>
    );
  }
}

export default App;
