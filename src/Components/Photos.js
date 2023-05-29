import React, { useState } from "react";
import { UserContext } from "../App";
import { theme, ThemeContext } from "./theme-context";
import ThemeButton from "./ThemeButton";

const Photos = (props) => {
  const [currentTheme, setCurrentTheme] = useState(theme.dark);

  const themeToggle = () => {
    try {
      let cu = currentTheme === theme.dark ? theme.light : theme.dark;
      setCurrentTheme(cu);
    } catch (error) {
      console.log(error, "rrrr");
    }
  };

  let themeObj = {
    theme: currentTheme,
    themeToggle,
  };
  import("./Math").then((math) => console.log(math.vishnuAdd(45, 78)));

  return (
    <div>
      From Context: <UserContext>{(value) => value}</UserContext>
      <h1>{props.name}</h1>
      <ThemeContext.Provider value={themeObj}>
        <ThemeButton />
      </ThemeContext.Provider>
    </div>
  );
};

export default Photos;
