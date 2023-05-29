import { counter } from "@fortawesome/fontawesome-svg-core";
import React, { Component, useEffect, useState } from "react";

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      counter: 1,
      posts: [{ name: "post by vishnu" }],
      comments: [{ author: "rohan" }],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        posts: [{ subName: "jangid" }],
      });
    }, 3000);

    setTimeout(() => {
      this.setState({
        comments: [{ newAuthor: "Vikas" }],
      });
    }, 5000);
  }

  render() {
    console.log(this.state, "POSTS");
    return (
      <div>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Clock;
