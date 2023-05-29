import React from 'react'

function createJSX() {
  return (
    React.createElement("div", {className: "vishnu", id:"v", style:{color: "blue"}}, <span>vishnu</span>,<span>sonu</span>)
  )
}

export default createJSX