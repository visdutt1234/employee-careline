import React, { Component, useEffect, useState } from "react";
import { data } from "../data/data_card";

class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 6,
      heading: null,
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
    let hitem = data.items;
    let result = hitem.filter((item) => item.id == this.props.id);
    console.log(result[0].heading);
    this.setState({ heading: result[0].heading });
  }

  componentDidUpdate(prevProps, prevState) {
    document.title = `You clicked ${this.state.count} times`;
    if (prevProps.id !== this.props.id) {
      console.log(prevProps.id, "prevProps.id")
      let hitem = data.items;
      let result = hitem.filter((item) => item.id == this.props.id);
      console.log(result[0].heading);
      this.setState({ heading: result[0].heading });
    }
  }

  componentWillUnmount() {
    alert("ALERT!!");
  }

  render() {
    console.log(this.props, "P");
    return (
      <>
        {this.state.heading && (
          <h2>
            heading: {this.state.heading} ID: {this.props.id}
          </h2>
        )}
        <p>
          You clicked {this.state.count} {this.props.count} times
        </p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click Me
        </button>
      </>
    );
  }
}

export default CounterButton;
