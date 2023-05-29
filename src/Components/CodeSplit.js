import React from "react";
function CodeSplit() {
  function HelloGreeting() {
    alert("Hello Alert!!!");
  }
//   import("./Math").then((res) => console.log(res.vishnuAdd(6, 7)));
  return (
    <div>
      <h1>Hello Code Spliting</h1>
      {HelloGreeting()}
    </div>
  );
}

export default CodeSplit;
