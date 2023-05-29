import { createContext } from "react";

const theme = {
  dark: {
    background: "#000",
    color: "#fff",
  },
  light: {
    background: "grey",
    color: "black",
  },
};

const ThemeContext = createContext({
  theme: theme.light,
  themeToggle: () => {alert("context handler")}
});

export { theme, ThemeContext };
