import { React, Component } from "react";

function getSubScribeDate(WrappedComponent, selectedData) {
  class setData extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: selectedData,
      };
    }

    render() {
      return <WrappedComponent data={this.state.data} heading="Comments List"/>;
    }
  }

  return setData
}

export default getSubScribeDate;
