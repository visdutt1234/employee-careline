import React, { useEffect, useState } from "react";

function useFriendStatus(action, val1, val2) {
  let result;
  switch (action) {
    case "multi":
      result = val1 * val2;
      break;
    case "sub":
      result = val1 - val2;
      break;
    case "add":
      result = val1 + val2;
      break;
    default:
      break;
  }

  return result
}


export default useFriendStatus;