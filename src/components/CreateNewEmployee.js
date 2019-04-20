import React, { Component } from 'react';

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
        <form onSubmit={this.onSubmit} class='App'>
          <h3>Create New Employee: </h3>
          <input
            placeholder='Employee Name'
            ref={nameInput => (this.nameInput = nameInput)}
          />{' '}
          <br />
          <input
            placeholder='Age'
            ref={ageInput => (this.ageInput = ageInput)}
          />{' '}
          <br />
          <input
            placeholder='Salary'
            ref={salaryInput => (this.salaryInput = salaryInput)}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateNewEmployee;
