import React from "react";

function Button(props) {
  function handleButton() {
    console.log("Button");
    if (typeof props.handleButton == "function") {
      props.handleButton();
    }
  }
  return <button onClick={handleButton}>{props.children}</button>;
}

export default Button;
