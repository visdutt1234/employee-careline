import React, { Component } from "react";

class NameForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    alert("Name: " + this.state.name + " Age: " + this.state.age);
    e.preventDefault();
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Age:
            <input
              type="text"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
          <div className="" onClick={() => this.props.userHandler()}>
            show user
          </div>
        </form>
        {this.props.children}
      </>
    );
  }
}

export default NameForm;
