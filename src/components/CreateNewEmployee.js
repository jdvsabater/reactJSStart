import React, { Component } from 'react';
import '../App.css';
import { Button, FormGroup, Label, Toast, ToastHeader } from 'reactstrap';

class CreateNewEmployee extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.addNewEmployee(
      this.nameInput.value,
      this.ageInput.value,
      this.salaryInput.value
    );

    this.nameInput.value = '';
    this.ageInput.value = '';
    this.salaryInput.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='formProp'>
          <div>
            <Toast>
              <ToastHeader className='toasterProp'>
                Add Employee Details
              </ToastHeader>
            </Toast>
          </div>
          <FormGroup>
            <Label>Employee Name</Label>
            <input
              className='textBox'
              placeholder='Employee Name'
              ref={nameInput => (this.nameInput = nameInput)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Employee Age</Label>
            <input
              className='textBox'
              placeholder='Age'
              ref={ageInput => (this.ageInput = ageInput)}
            />{' '}
          </FormGroup>
          <FormGroup>
            <Label>Employee Salary</Label>
            <input
              className='textBox'
              placeholder='Salary'
              ref={salaryInput => (this.salaryInput = salaryInput)}
            />
          </FormGroup>
          <Button color='success'>Submit</Button>
        </form>
      </div>
    );
  }
}

export default CreateNewEmployee;
