import React, { useState } from "react";

function CountLabel({ count }) {
  const [prevCount, setPrevCount] = useState(count);
  const [trend, setTrend] = useState(null);

  console.log(prevCount, count, "----");

  if (prevCount !== count) {
    setPrevCount(count);
    setTrend(count > prevCount ? "increasing" : "decreasing");
  }

  const changeState = () => {
    setTrend("increasing")
    console.log(trend, "trend")
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={changeState}>State Change</button>
      {trend && <p>this count is {trend}</p>}
    </>
  );
}

export default CountLabel;
