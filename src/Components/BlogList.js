import React, { Component } from "react";
import { blogs } from "./data";
import getSubScribeDate from "./Hocs";

class BlogList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props)
        return <ul>
             <h2>BLOG LISTS m</h2>
             {this.props.children}
            {this.props.data.map(item => <li>{item.blogs}</li>)}
        </ul>
    }
}

export default getSubScribeDate(BlogList, blogs);