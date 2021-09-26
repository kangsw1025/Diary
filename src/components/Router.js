import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

export default ({ isLogin, userObj }) => {
  return (
    <Router>
      <Switch>
        {isLogin ? (
          <>
            <Route path="/" exact>
              <Home userObj={userObj} />
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
