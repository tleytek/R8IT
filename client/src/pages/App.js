import React, { Component, Fragment } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
import Header from "../components/Header";
import PrivateRoute from "../components/PrivateRoute";
import Login from "./Login";
import Rate from "./Rate";
// import Post from './r8it/postDisplay';
import PostList from "./postsDisplay";
import About from "./about";
import PostCreate from "./PostCreate";
import ChallengeCreate from "./ChallengeCreate";
// import Categories from './r8it/categories';
// import Admin from './r8it/admin';
import history from "../history";
import { CssBaseline } from "@material-ui/core";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <CssBaseline>
        <Router history={history}>
          <Fragment>
            <Header />
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/rate" component={Rate} />
              {/* <Route exact path="/review/:postId" component={Post} /> */}
              <PrivateRoute exact path="/ranks" component={PostList} />
              <PrivateRoute path="/compete" component={PostCreate} />
              <PrivateRoute path="/create" component={ChallengeCreate} />
              {/* <Route exact path="/category" component={Categories} /> */}
              {/* <Route exact path="/SuperSecretAdminPage" component={Admin} /> */}
              <Route path="/login" component={Login} />
            </Switch>
          </Fragment>
        </Router>
      </CssBaseline>
    );
  }
}

export default connect(
  null,
  { fetchUser }
)(App);
