import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2)
  }
}));

const PaperContainer = ({ children }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Paper className={classes.paper}>{children}</Paper>
    </Container>
  );
};

export default PaperContainer;
