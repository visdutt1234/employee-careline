import React from "react";
import OnlineStatus from "./useOnlineStatus";

const CounterButton = (props) => {
  const isOnline =  OnlineStatus(props.id);
  return isOnline ? (
    <span style={{ color: isOnline ? "green" : "blue" }}>Online</span>
  ) : (
    <span style={{ color: isOnline ? "green" : "blue" }}>Offline</span>
  );
};

export default CounterButton;
