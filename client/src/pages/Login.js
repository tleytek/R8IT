import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import PaperContainer from "../components/PaperContainer";
import Button from "@material-ui/core/Button";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  link: {
    padding: theme.spacing(1, 1.5)
  },
  button: { textDecoration: "none", color: "inherit", margin: "0px 10px" }
}));

const Login = () => {
  const classes = useStyles();
  return (
    <PaperContainer>
      <h1>You must be logged in to view this page.</h1>
      <Button
        href="/auth/google/login"
        color="inherit"
        variant="outlined"
        className={clsx(classes.link, classes.button)}
      >
        Login
      </Button>
    </PaperContainer>
  );
};

export default connect()(Login);
