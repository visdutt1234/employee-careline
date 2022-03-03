import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./SideCard.scss";

const SideCard = (props) => {
  let item  = props.item;

  return (
    <a className="side_card" href="#" title="">
      <h2>{item.heading}</h2>
      <div className="holder">
        <span className="icon">
          <FontAwesomeIcon icon={faCalculator} />
        </span>
        <span className="count">
          {item.count}
          <span className="bar-fill">
            <span style={{"backgroundColor": item.bgColor}} className="fill-bg"></span>
          </span>
          <span className="name-cd">{item.name}</span>
        </span>
      </div>
    </a>
  );
};

export default SideCard;
