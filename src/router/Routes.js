import React from "react";
import { Switch, Route } from "react-router-dom";

function Routes({ routes = [] }) {
  return (
    <Switch>
      {routes.map((route, i) => (
        <Route key={i} {...route} />
      ))}
    </Switch>
  );
}

export default Routes;
