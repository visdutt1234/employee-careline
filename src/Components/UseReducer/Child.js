import React, { Fragment, useContext } from "react";
import { AuthContext } from "./Login";

function Child() {
  const { currentUser } = useContext(AuthContext);
  return <Fragment><h1>Child {currentUser && <div>{currentUser}</div>}</h1></Fragment>;
}

export default Child;
