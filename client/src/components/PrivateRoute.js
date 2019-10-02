import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// https://www.youtube.com/watch?v=ojYbcon588A
// watch this video to understand the wierd syntax here
const PrivateRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        switch (user) {
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

const mapStateToProps = state => {
  console.log(state);
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(PrivateRoute);
