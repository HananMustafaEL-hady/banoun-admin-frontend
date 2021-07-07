import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component }) => (
  <Route
    render={(props) =>
      !sessionStorage.getItem("token") ? (
        <Redirect to="/login" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default connect(null)(PrivateRoute);
