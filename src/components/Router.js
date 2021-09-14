import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Header from "./Header";

export default ({ isLogin }) => {
  return (
    <Router>
      <Switch>
        {isLogin ? (
          <>
            <Header />
            <Route path="/" exact>
              <Home />
            </Route>
          </>
        ) : (
          <Route path="/" exact>
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};
