import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./Home/Home";
import Result from "./Result/Result";
import AboutUs from "./aboutUs/aboutUs";

function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/search" component={Home} />
        <Route path="/result" component={Result} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route
          path="/redirect"
          component={() => {
            window.location.href = window.location.pathname.substr(10);
            return null;
          }}
        />
        <Redirect from="/" to="/search" />
      </Switch>
    </BrowserRouter>
  );
}

export default routes;
