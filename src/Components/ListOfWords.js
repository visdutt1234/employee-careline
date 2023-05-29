import React from "react";

class ListOfWords extends React.PureComponent {
  render() {
    return <div>{this.props.words.join(",")} <h2 style={{background: this.props.colormap.right}} >BACKGROUND</h2></div>;
  }
}

export default ListOfWords;
