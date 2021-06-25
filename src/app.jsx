import React from "react";
import { Route, Switch } from "react-router-dom";
import Routes from "./routing/Routes";


const App = () => {

  return (
    <Switch>
      <Route component={Routes} />
    </Switch>
  );
};

export default App;
