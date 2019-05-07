import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ShowEmployee from './components/ShowEmployee';
import CreateNewEmployee from './components/CreateNewEmployee';
import Modal from './components/modals/Modal';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from 'reactstrap';
import classnames from 'classnames';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { employeeList: [] };
    this.addNewEmployee = this.addNewEmployee.bind(this);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
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

  componentDidMount() {
    this.getEmployees();
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => {
                this.toggle('1');
              }}
            >
              Employee Management
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => {
                this.toggle('2');
              }}
            >
              Create Employee
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId='1'>
            <Row>
              <Col>
                <ShowEmployee />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId='2'>
            <Row>
              <Col sm='12'>
                <CreateNewEmployee addNewEmployee={this.addNewEmployee} />
              </Col>
            </Row>
          </TabPane>
        </TabContent>

        <Modal onClose={this.showModal} show={this.state.show}>
          <CreateNewEmployee addNewEmployee={this.addNewEmployee} />
        </Modal>
      </div>
    );
  }
}

export default App;
