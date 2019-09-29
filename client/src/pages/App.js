import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
import Header from "../components/Header";
import PrivateRoute from "../components/PrivateRoute";
import Login from "./Login";
import Rate from "./Rate";
// import Post from './r8it/postDisplay';
// import PostList from './r8it/postsDisplay';0
// import Dashboard from "./dashboard";
import PostCreate from "./PostCreate";
import ChallengeCreate from "./ChallengeCreate";
// import Categories from './r8it/categories';
// import Admin from './r8it/admin';
import history from "../history";
import { CssBaseline, withStyles } from "@material-ui/core";

const styles = theme => ({
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2)
  }
});

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    const { classes, auth } = this.props;
    return (
      <CssBaseline>
        <Router history={history}>
          <React.Fragment>
            <Header auth={auth} />
            <Switch>
              {/* <Route exact path="/dashboard" component={Dashboard} /> */}
              <PrivateRoute exact path="/" component={Rate} />
              {/* <Route exact path="/review/:postId" component={Post} /> */}
              {/* <Route exact path="/review" component={PostList} /> */}
              <PrivateRoute path="/compete" component={PostCreate} />
              <PrivateRoute path="/create" component={ChallengeCreate} />
              {/* <Route exact path="/category" component={Categories} /> */}
              {/* <Route exact path="/SuperSecretAdminPage" component={Admin} /> */}
              <Route path="/login" component={Login} />
            </Switch>
          </React.Fragment>
        </Router>
      </CssBaseline>
    );
  }
}
const appWithStyles = withStyles(styles)(App);

export default connect(
  null,
  { fetchUser }
)(appWithStyles);
