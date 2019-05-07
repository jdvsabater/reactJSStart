import React, { Component } from 'react';
import '../App.css';
import { Button, FormGroup, Label, Toast, ToastHeader } from 'reactstrap';

class EditEmployee extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      id: this.props.id,
      name: this.props.name,
      age: this.props.age,
      salary: this.props.salary
    };
  }

  onSubmit(e) {
    e.preventDefault();

    var id = this.props.id;

    const data = {
      name: this.nameInput.value,
      age: this.ageInput.value,
      salary: this.salaryInput.value
    };

    this.props.updateEmployeeById(id, data);

    this.nameInput.value = '';
    this.ageInput.value = '';
    this.salaryInput.value = '';
  }
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.onSubmit}
          onClick={e => {
            this.onClose(e);
          }}
        >
          <div>
            <Toast>
              <ToastHeader className='toasterProp'>
                Update Employee Details
              </ToastHeader>
            </Toast>
          </div>

          <FormGroup>
            <Label>Employee Name</Label>
            <input
              className='textBox'
              defaultValue={this.state.name}
              ref={nameInput => (this.nameInput = nameInput)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Employee Age</Label>
            <input
              className='textBox'
              defaultValue={this.state.age}
              ref={ageInput => (this.ageInput = ageInput)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Employee Salary</Label>
            <input
              className='textBox'
              defaultValue={this.state.salary}
              ref={salaryInput => (this.salaryInput = salaryInput)}
            />
          </FormGroup>

          <Button color='warning'>Submit</Button>
        </form>
      </div>
    );
  }
}

export default EditEmployee;
