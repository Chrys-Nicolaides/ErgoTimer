import React, { useState } from "react";
import { ReactComponent as SunToggleIcon } from "../images/SunToggleIcon.svg";
import { ReactComponent as MoonToggleIcon } from "../images/MoonToggleIcon.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ThemeToggle = (props) => {
  const lightColors = {
    pink: "#e9acdb",
    blue: "#b0d7f5",
    purple: "#8f7cc2",
  };
  const darkColors = {
    pink: "#B76FA7",
    blue: "#5EA5DC",
    purple: "#45406C",
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
  };

  return (
    <Router>
      <div className="themes">
        <Switch>
          <Route path="/dark">
            <div className="DarkTheme-themeButton">
              <Link to="/light" activeClassName="IsActive" exact={true}>
                <div className="toggle-container-dark">
                  <MoonToggleIcon
                    alt="Theme Toggle"
                    className="MoonToggleIcon"
                    onClick={() => handleColourChange(lightColors)}
                  />
                </div>
              </Link>
            </div>
          </Route>
          <Route path="/">
            <div className="LightTheme-themeButton">
              <Link to="/dark" activeClassName="IsActive" exact={true}>
                <div className="toggle-container-light">
                  <SunToggleIcon
                    alt="Theme Toggle"
                    className="SunToggleIcon"
                    onClick={() => handleColourChange(darkColors)}
                  />
                </div>
              </Link>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default ThemeToggle;
