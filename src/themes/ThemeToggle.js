import React, { useState } from "react";
import LightTheme from "./LightTheme";
import DarkTheme from "./DarkTheme";
import { ReactComponent as ThemeIconToggle } from "../images/ThemeIconToggle.svg";
import { ReactComponent as MoonToggleIcon } from "../images/MoonToggleIcon.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ThemeToggle = () => {
  const [themeColor, setThemeColor] = useState({
    background: "#54669E",
    gradient: "#7DB1E4",
    text: "white",
  });

  let setColor = (object, color) =>
    document.documentElement.style.setProperty(`--${object}`, color);

  let handleColourChange = (backgroundColor, gradientColor, textColor) => {
    setThemeColor({
      background: backgroundColor,
      gradient: gradientColor,
      text: textColor,
    });
  };
  setColor("theme-background", themeColor.background);
  setColor("theme-gradient", themeColor.gradient);
  setColor("theme-text", themeColor.text);

  return (
    <Router>
      <div className="themes">
        <Switch>
          <Route path="/dark">
            <div className="DarkTheme themeButton">
              <Link to="/light" activeClassName="IsActive" exact={true}>
                <MoonToggleIcon
                  alt="Theme Toggle"
                  className="SunIconToggle"
                  onClick={() =>
                    handleColourChange("#5D70AD", "#8BCDFC", "#475569")
                  }
                />{" "}
              </Link>
            </div>
          </Route>
          <Route path="/">
            <div className="LightTheme themeButton">
              <Link to="/dark" activeClassName="IsActive" exact={true}>
                <ThemeIconToggle
                  alt="Theme Toggle"
                  className="MoonIconToggle"
                  onClick={() =>
                    handleColourChange("#5E72AE", "#3A3A3A", "#475569")
                  }
                />
              </Link>
            </div>
          </Route>
        </Switch>
      </div>
      <div className="viewport">
        <Switch>
          <Route path="/dark">
            <DarkTheme />
          </Route>
          <Route path="/light">
            <LightTheme />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default ThemeToggle;
