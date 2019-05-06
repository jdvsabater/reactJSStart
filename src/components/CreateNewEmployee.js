import React, { Component } from 'react';
import '../App.css';

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
        <form onSubmit={this.onSubmit}>
          <h3>Create New Employee: </h3>
          <input
            className='txtBox'
            placeholder='Employee Name'
            ref={nameInput => (this.nameInput = nameInput)}
          />{' '}
          <br />
          <input
            className='txtBox'
            placeholder='Age'
            ref={ageInput => (this.ageInput = ageInput)}
          />{' '}
          <br />
          <input
            className='txtBox'
            placeholder='Salary'
            ref={salaryInput => (this.salaryInput = salaryInput)}
          />
          <br />
          <br />
          <button className='myButton'>Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateNewEmployee;
