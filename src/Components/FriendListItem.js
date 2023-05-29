import React from "react";
import OnlineStatus from "./useOnlineStatus";

const FriendListItem = (props) => {
  const isOnline = OnlineStatus(props.id);
  console.log(props)
  return <li style={{color: isOnline ? 'green' : 'blue'}}>{isOnline}</li>
};

export default FriendListItem;
