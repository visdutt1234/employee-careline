import React, { Component } from "react";
import { comments } from "./data";
import getSubScribeDate from "./Hocs";

class CommentsList extends Component {
    render() {
        return <ul>
            <h2>{this.props.heading}</h2>
            {this.props.data.map(item => <li>{item.comment}</li>)}
        </ul>
    }
}

export default getSubScribeDate(CommentsList, comments);