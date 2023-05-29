import React from "react";
import { createPortal } from "react-dom";

function Portal(props) {  
  return createPortal(props.children, props.el)
}

export default Portal;
