import React, { useContext, useEffect } from "react";
import { ThemeContext } from "./theme-context";

export default function ThemeButton() {
  const theme = useContext(ThemeContext);
  console.log(theme)
  useEffect(() => {
    document.querySelector("body").style.cssText = `background:${theme.theme.background};color:${theme.theme.color};`;
  }, [theme]);
  return (
    <div>
      <ThemeContext.Consumer>
        {({theme, themeToggle}) => <button onClick={() => themeToggle(theme)}>Change Theme {theme.background}</button>}
      </ThemeContext.Consumer>
    </div>
  );
}
