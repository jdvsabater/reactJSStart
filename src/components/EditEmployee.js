import React, { Component } from 'react';
import '../App.css';

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
          <h3>Update Employee: </h3>
          <input
            className='txtBox'
            defaultValue={this.state.name}
            ref={nameInput => (this.nameInput = nameInput)}
          />{' '}
          <br />
          <input
            className='txtBox'
            defaultValue={this.state.age}
            ref={ageInput => (this.ageInput = ageInput)}
          />{' '}
          <br />
          <input
            className='txtBox'
            defaultValue={this.state.salary}
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

export default EditEmployee;
