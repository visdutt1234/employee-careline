import React, { memo, useContext, useEffect } from "react";
import { AuthContext } from "./Login";

function User() {
  const { currentUser, login } = useContext(AuthContext);


  useEffect(() => {
    console.log("useEffect User");
  }, []);


  console.log(currentUser, login, "currentUser,login");
  return (
    <div>
      {currentUser ? (
        <h1>Hello, {currentUser}</h1>
      ) : (
        <h1>
          Please Login <button onClick={() => login("Krishna jangir")}>Login</button>
        </h1>
      )}
    </div>
  );
}

export default memo(User);
