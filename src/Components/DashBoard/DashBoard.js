import React, { Component } from 'react'
import SideCard from "./SideCard";
import "./DashBoard.scss";
import { data } from "../../data/data_card";

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideCardItems: data.items,
    } 
  }


  render() {    
    return (
      <div className="dashboard clearfix">
        <div className="dashboard-card-view">
          {this.state.sideCardItems.map((item, index) => (
            <SideCard key={index} item={item}/>
          ))}
        </div>    
    </div>
    )
  }
}

export default DashBoard;
