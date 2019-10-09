import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import DashboardCategory from "./ReviewCategory";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "1920px"
  }
});

const renderCategory = () => {};

export class Review extends Component {
  render() {
    const { classes } = this.props;
    return <PaperContainer></PaperContainer>;
  }
}

export default Review;
