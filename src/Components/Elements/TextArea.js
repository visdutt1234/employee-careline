import React, { forwardRef } from "react";
import logProps from "../LogProps";

const TextArea = forwardRef(function TextArea(props, ref) {
  return (
    <div>
      <label>Comment:-</label>
      <div>
        <textarea
          ref={ref}
          id="textArea"
          placeholder="Please enter Comments"
        ></textarea>
      </div>
    </div>
  );
});

export default logProps(TextArea);
