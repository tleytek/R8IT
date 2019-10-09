import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.secondary
  },
  toolbar: {
    flexWrap: "nowrap"
  },
  homeLink: {
    display: "flex",
    textDecoration: "none",
    padding: "10px",
    color: "#fff"
  },
  linkList: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  link: {
    padding: theme.spacing(1, 1.5)
  },
  logo: {
    height: "40px",
    marginRight: "10px"
  },
  button: { textDecoration: "none", color: "inherit", margin: "0px 10px" }
}));

const Header = props => {
  const classes = useStyles();

  const renderAuth = () => {
    switch (props.auth) {
      case null:
        return;
      case false:
        return (
          <Button
            href="/auth/google/login"
            color="inherit"
            variant="outlined"
            className={clsx(classes.link, classes.button)}
          >
            Login
          </Button>
        );
      default:
        return (
          <Button
            href="/auth/google/logout"
            color="inherit"
            variant="outlined"
            className={clsx(classes.link, classes.button)}
          >
            Logout
          </Button>
        );
    }
  };

  return (
    <AppBar position="static" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/" className={classes.homeLink}>
          <img
            className={classes.logo}
            src="/media/logo-r8it.png"
            alt="R8IT logo"
          />
          <Typography variant="h4" color="inherit">
            R8IT
          </Typography>
        </RouterLink>
        <nav className={classes.linkList}>
          <Link
            component={RouterLink}
            to="/rate"
            className={classes.link}
            color="inherit"
          >
            <Typography variant="button">Rate</Typography>
          </Link>
          <Link
            component={RouterLink}
            to="/review"
            className={classes.link}
            color="inherit"
          >
            <Typography variant="button">Review</Typography>
          </Link>
          <Link
            component={RouterLink}
            color="inherit"
            to="/compete"
            className={classes.link}
          >
            <Typography variant="button">Compete</Typography>
          </Link>
          <Link
            component={RouterLink}
            color="inherit"
            to="/create"
            className={classes.link}
          >
            <Typography variant="button">Create</Typography>
          </Link>
          {renderAuth()}
        </nav>
      </Toolbar>
    </AppBar>
  );
};
const mapStateToProps = state => {
  return {
    auth: state.user
  };
};
export default connect(mapStateToProps)(Header);
