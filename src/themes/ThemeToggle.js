import React, { useState } from "react";
// import LightTheme from "./LightTheme";
// import DarkTheme from "./DarkTheme";
import { ReactComponent as SunToggleIcon } from "../images/SunToggleIcon.svg";
import { ReactComponent as MoonToggleIcon } from "../images/MoonToggleIcon.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ThemeToggle = (props) => {
  // const setTheme = { props };

  const lightColors = {
    pink: "#e9acdb",
    blue: "#b0d7f5",
    purple: "#8f7cc2",
    text: "#374151",
    textLight: "#6b7280",
  };
  const darkColors = {
    pink: "#B76FA7",
    blue: "#5EA5DC",
    purple: "#3B296E",
    text: "#ffffff",
    textLight: "#ffffff",
  };

  const [themeColor, setThemeColor] = useState(lightColors);

  let setColor = (object, color) =>
    document.documentElement.style.setProperty(`--${object}`, color);

  let handleColourChange = (input) => {
    if (input === lightColors) {
      props.setTheme("light-theme");
    } else if (input === darkColors) {
      props.setTheme("dark-theme");
    }
    setThemeColor(input);

    setColor("theme-pink", input.pink);
    setColor("theme-blue", input.blue);
    setColor("theme-purple", input.purple);
    setColor("theme-text", input.text);
    setColor("theme-text-light", input.textLight);
  };

  return (
    <Router>
      <div className="themes">
        <Switch>
          <Route path="/dark">
            <div className="DarkTheme-themeButton">
              <Link to="/light" activeClassName="IsActive" exact={true}>
                <MoonToggleIcon
                  alt="Theme Toggle"
                  className="MoonToggleIcon"
                  onClick={() => handleColourChange(lightColors)}
                />
              </Link>
            </div>
          </Route>
          <Route path="/light">
            <div className="LightTheme-themeButton">
              <Link to="/dark" activeClassName="IsActive" exact={true}>
                <SunToggleIcon
                  alt="Theme Toggle"
                  className="SunToggleIcon"
                  onClick={() => handleColourChange(darkColors)}
                />
              </Link>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default ThemeToggle;
