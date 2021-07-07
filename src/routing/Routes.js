import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import PrivateRoute from "./privateRoute";
import Admin from "./../pages/admin";

const Routes = (props) => {
  return (
    <section>
      <Switch>
        <Route exact path="/login" component={Login} />

        <PrivateRoute exact path="/" component={Admin} />
      </Switch>
    </section>
  );
};

export default Routes;
