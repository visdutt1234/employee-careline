import React, { useState, useMemo, useCallback, createContext } from "react";
import User from "./User";
import Child from "./Child";

export const AuthContext = createContext({
  currentUser: "Vishnu",
  login: () => {
    console.log("not changble");
  },
});

function Login() {
  const [currentUser, setCurrentUser] = useState("Rohit");
  const login = useCallback((user) => {
    setCurrentUser(user);
  }, []);

  const contextValue = useMemo(
    () => ({
      currentUser,
      login,
    }),
    [currentUser, login]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      <AuthContext.Provider value={{currentUser: "Vishnu innnnn"}}>
        <button onClick={() => login("Rohit")}>Change Context Value</button>
        <Child/>
        <User />
      </AuthContext.Provider>
    </AuthContext.Provider>
  );
}

export default Login;
