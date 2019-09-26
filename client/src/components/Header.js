import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { getUserId } from "../actions";
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
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  logo: {
    height: "40px",
    marginRight: "10px"
  },
  button: { textDecoration: "none", color: "inherit" }
}));

const Header = props => {
  const classes = useStyles();
  console.log(props.auth);
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
        <img
          className={classes.logo}
          src="/media/logo-r8it.png"
          alt="R8IT logo"
        />

        <Typography
          variant="h4"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          R8IT
        </Typography>
        <nav>
          <Link
            component={RouterLink}
            to="/"
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

export default Header;
