import React, { useState } from "react";
import LightTheme from "./LightTheme";
import DarkTheme from "./DarkTheme";
import { ReactComponent as ThemeIconToggle } from "../images/ThemeIconToggle.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ThemeToggle = () => {
  const [themeColor, setThemeColor] = useState({
    background: "#5D70AD",
    gradient: "#8BCDFC",
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
            <div className="DarkTheme">
              <Link to="/light" activeClassName="IsActive" exact={true}>
                <ThemeIconToggle
                  alt="Theme Toggle"
                  className="ThemeIconToggle"
                  onClick={() =>
                    handleColourChange("#5D70AD", "#8BCDFC", "white")
                  }
                />{" "}
              </Link>
            </div>
          </Route>
          <Route path="/">
            <div className="LightTheme">
              <Link to="/dark" activeClassName="IsActive" exact={true}>
                <ThemeIconToggle
                  alt="Theme Toggle"
                  className="ThemeIconToggle"
                  onClick={() =>
                    handleColourChange("black", "#5D70AD", "white")
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
