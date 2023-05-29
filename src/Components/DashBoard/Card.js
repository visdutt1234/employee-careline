import React, { useState } from "react";
import "./Card.scss";

const defaultProps = {
  name: "sonu"
}

const Card = (props) => {
  const [newData, setNewData] = useState(100);
  let date = new Date();


  setInterval(() => {
    date = new Date();
  }, 1000)


  

  return (
    <div className="dashBig_Card">
      <h3>Birthdays {newData} {date.toLocaleTimeString()}</h3>
      <div className="card_content">{props.name}</div>
    </div>
  );
};

Card.defaultProps = defaultProps;
export default Card;
