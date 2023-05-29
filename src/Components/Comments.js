import React, { useRef } from "react";
import Button from "./Elements/Button";
import TextArea from "./Elements/TextArea";

function Comments() {
  let textRef = useRef(null);
  function handleButton() {
    textRef.current.style.color = "red";
    textRef.current.style.borderWidth =  "5px";
    console.log(textRef, "textRef")
  }
  return (
    <>
      <TextArea ref={textRef}/>
      <Button handleButton={handleButton}>Submit</Button>
    </>
  );
}

export default Comments;
