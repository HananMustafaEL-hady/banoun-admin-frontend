import React from "react";
import { Route, Switch } from "react-router-dom";

import Admin from "./../pages/admin";

const Routes = (props) => {
  return (
    <section>
      <Switch>
        <Route exact path="/" component={Admin} />
      </Switch>
    </section>
  );
};

export default Routes;
