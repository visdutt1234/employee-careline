import React from "react";
import ListOfWords from "./ListOfWords";


const defaultProps = {
  name: "Vishnu jangid"
}
class WordAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ["marklar"],
      colormap: {
        right: 'yellow'
      }
    };
    this.handleClick = this.handleClick.bind(this);
    this.updateColorMap = this.updateColorMap.bind(this);
  }

  handleClick() {
    // This section is bad style and causes a bug
    const words = this.state.words;
    words.push("marklar");
    this.setState((state) => ({
        words: [...state.words, "vishhnu"]
    }));
  }

  updateColorMap() {
    let obj =  Object.assign({}, this.state.colormap);
    obj.right = 'blue'
    this.setState({
      colormap: obj
    })
  }

  render() {
    return (
      <div>
      <h1>Name: {this.props.name}</h1>
        <button onClick={this.handleClick} />
        <button onClick={this.updateColorMap}>change color - {this.state.colormap.right}</button>
        <ListOfWords words={this.state.words} colormap={this.state.colormap}/>
      </div>
    );
  }
}

WordAdder.defaultProps = defaultProps;
export default WordAdder;
