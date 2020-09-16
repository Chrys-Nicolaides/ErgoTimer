import React from "react";
import LightTheme from "./LightTheme";
import DarkTheme from "./DarkTheme";
import { ReactComponent as ThemeIconToggle } from "../images/ThemeIconToggle.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ThemeToggle = () => {
  return (
    <Router>
      <div className="themes">
        <Switch>
          <Route path="/light">
            <div className="DarkTheme">
              <Link to="/dark" activeClassName="IsActive" exact={true}>
                <ThemeIconToggle
                  alt="Theme Toggle"
                  className="ThemeIconToggle"
                />
              </Link>
            </div>
          </Route>
          <Route path="/dark">
            <div className="LightTheme">
              <Link to="/light" activeClassName="IsActive" exact={true}>
                <ThemeIconToggle
                  alt="Theme Toggle"
                  className="ThemeIconToggle"
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
