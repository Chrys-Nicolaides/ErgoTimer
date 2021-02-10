import React, { useState } from "react";
import LightTheme from "./LightTheme";
import DarkTheme from "./DarkTheme";
import { ReactComponent as ThemeIconToggle } from "../images/ThemeIconToggle.svg";
import { ReactComponent as MoonToggleIcon } from "../images/MoonToggleIcon.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ThemeToggle = () => {
  const [themeColor, setThemeColor] = useState({
    pink: "#e9acdb",
    blue: "#b0d7f5",
    purple: "#8f7cc2",
    text: "#374151",
    textLight: "#6b7280",
  });

  let setColor = (object, color) =>
    document.documentElement.style.setProperty(`--${object}`, color);

  let handleColourChange = (
    pinkColor,
    blueColor,
    purpleColor,
    textColor,
    textLightColor
  ) => {
    setThemeColor({
      pink: pinkColor,
      blue: blueColor,
      purple: purpleColor,
      text: textColor,
      textLight: textLightColor,
    });
  };
  setColor("theme-pink", themeColor.pink);
  setColor("theme-blue", themeColor.blue);
  setColor("theme-purple", themeColor.purple);
  setColor("theme-text", themeColor.text);
  setColor("theme-text-light", themeColor.textLight);

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
                    handleColourChange(
                      "#e9acdb",
                      "#b0d7f5",
                      "#8f7cc2",
                      "#374151",
                      "#6b7280"
                    )
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
                    handleColourChange(
                      "#B76FA7",
                      "#5EA5DC",
                      "#3B296E",
                      "white",
                      "white"
                    )
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
