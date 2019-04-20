import React, { Component } from 'react';

class CreateNewEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = { employees: [] };
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
            placeholder='Employee Name'
            ref={nameInput => (this.nameInput = nameInput)}
          />
          <input
            placeholder='Age'
            ref={ageInput => (this.ageInput = ageInput)}
          />
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
