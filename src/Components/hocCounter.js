import React, { useState } from "react";

const hocCounter = (WarraperComponent) => {
  const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleCounter = () => {
      setCounter(counter + 1);
    };
    
    return (
      <WarraperComponent counter={counter} handleCounter={handleCounter} />
    );
  };
  return Counter;
};

export default hocCounter;
