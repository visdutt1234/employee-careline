import React, { useEffect, useState } from "react";
import "./Card.scss";

const Card = () => {
  const [newData, setNewData] = useState(100);

  useEffect(() => {
    setNewData(500);
    setTimeout(() => {
      console.log("Hello Hello");
    }, 1000)
   
  }, [5])

  

  return (
    <div className="dashBig_Card">
      <h3>Birthdays {newData} </h3>
      <div className="card_content">vishnu dtttttttttt</div>
    </div>
  );
};

export default Card;
