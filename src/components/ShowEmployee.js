import React, { Component } from 'react';
import axios from 'axios';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import '../App.css';
import EditEmployee from './EditEmployee';
import Modal from './modals/Modal';
import { Button, Toast, ToastHeader } from 'reactstrap';

class ShowEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], id: '', name: '', age: '', salary: '' };
    this.getEmployeeById = this.getEmployeeById.bind(this);
  }

  deleteEmployee(id) {
    try {
      axios
        .delete(`http://dummy.restapiexample.com/api/v1/delete/${id}`)
        .then(res => {
          console.log(res.data);
          this.getEmployees();
          console.log('Employee Deleted');
          console.log(id);
        });
    } catch (err) {
      console.log('Fail to delete emplyoee');
      console.log(err);
    }
  }

  updateEmployeeById(id, data) {
    try {
      axios
        .put(`http://dummy.restapiexample.com/api/v1/update/${id}`, data)
        .then(res => {
          console.log('Updated employee data');
          console.log(res.data);
        });
    } catch (err) {
      console.log('Error on updating selected employee data');
      console.log(err);
    }
  }

  getEmployeeById(id) {
    try {
      axios
        .get(`http://dummy.restapiexample.com/api/v1/employee/${id}`)
        .then(res => {
          console.log('Selected employee data');
          console.log(res.data);
          this.setState({
            id: res.data.id,
            name: res.data.employee_name,
            age: res.data.employee_age,
            salary: res.data.employee_salary
          });

          console.log(this.state.id);
          this.showModal();
        });
    } catch (err) {
      console.log('Error on fetching selected employee data');
      console.log(err);
    }
  }

  getEmployees() {
    try {
      axios
        .get('http://dummy.restapiexample.com/api/v1/employees')
        .then(res => {
          this.setState({ data: res.data });
          console.log(this.state.data);
        });
    } catch (err) {
      console.log('Fetching Employee Details');
      console.log(err);
    }
  }
  componentDidMount() {
    this.getEmployees();
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
    const columns = [
      {
        Header: 'Id',
        accessor: 'id'
      },
      {
        Header: 'Name',
        accessor: 'employee_name'
      },
      {
        Header: 'Age',
        accessor: 'employee_age'
      },
      {
        Header: 'Salary',
        accessor: 'employee_salary'
      },
      {
        Header: '',
        accessor: '',
        width: 150,
        Cell: ({ row }) => (
          <div>
            <Button
              color='warning'
              onClick={this.getEmployeeById.bind(this, row.id)}
            >
              Edit
            </Button>
          </div>
        )
      },
      {
        Header: '',
        accessor: '',
        width: 150,
        Cell: ({ row }) => (
          <div>
            <Button
              color='danger'
              onClick={this.deleteEmployee.bind(this, row.id)}
            >
              Delete
            </Button>
          </div>
        )
      }
    ];

    return (
      <div align='center'>
        <div className='p-3 my-2 rounded bg-docs-transparent-grid'>
          <Toast>
            <ToastHeader className='toasterProp'>Employee Table</ToastHeader>
          </Toast>
        </div>
        <ReactTable
          className='mTable'
          data={this.state.data}
          columns={columns}
          defaultPageSize={10}
          pageSizeOptions={[10]}
        />

        <Modal onClose={this.showModal} show={this.state.show}>
          <EditEmployee
            id={this.state.id}
            name={this.state.name}
            age={this.state.age}
            salary={this.state.salary}
            updateEmployeeById={this.updateEmployeeById}
          />
        </Modal>
      </div>
    );
  }
}

export default ShowEmployee;
