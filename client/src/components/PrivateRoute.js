import React from "react";
import { withRouter } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import LinearProgress from "../components/LinearProgress";

// https://www.youtube.com/watch?v=ojYbcon588A
// watch this video to understand the wierd syntax here
const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        switch (auth) {
          case null:
            return <div />;
          case false:
            return (
              <Redirect
                to={{ pathname: "/login", state: { from: props.location } }}
              />
            );
          default:
            return <Component {...props} />;
        }
      }}
    />
  );
};

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(withRouter(PrivateRoute));
