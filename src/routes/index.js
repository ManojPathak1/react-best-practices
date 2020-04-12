import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import config from "./config";

function RoutesComponent() {
  return <Router>
    <Switch>
      {config.map((route, i) => (
        <Route
          key={i}
          exact={route.exact}
          path={route.path}
          render={props => (
            // pass the sub-routes down to keep nesting
            <Suspense fallback={<div>Loading...</div>}>
              <route.component {...props} routes={route.routes} />
            </Suspense>
          )}
        />
      ))}
    </Switch>
  </Router>;
}

export default RoutesComponent;