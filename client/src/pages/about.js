import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  fullScreenLanding: {
    width: "100%",
    height: "calc(100vh - 64px)",
    overflow: "hidden",
    "& div": {
      backgroundColor: "blue",
      width: "100%",
      height: "100%",
      opacity: "0.4",
      "& img": {
        minHeight: "100%",
        maxWidth: "100%"
      }
    }
  },
  section: {
    height: "400px",
    width: "100%",
    "& .even": {
      backgroundColor: "purple"
    },
    "& .odd": {
      backgroundColor: "white"
    }
  }
  // evenSection: {
  //   backgroundColor: "purple",
  //   height: "400px",
  //   width: "100%"
  // },
  // oddSection: {
  //   backgroundColor: 'white',
  //   height: '400px',
  //   width: '100%'
  // }
}));

const About = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.fullScreenLanding}>
        <a name="home" />
        <div>
          <img src="./media/arm-wrestling-bar-bet-4417.jpg" />
        </div>
      </div>
      <div />
      <div className={classes.section}>
        <div className={classes.even}>
          <a name="section-1">Stuff</a>
        </div>
      </div>
      <div className={classes.section}>
        <a name="section-2">More Stuff</a>
      </div>
      <div className={classes.section}>
        <a name="section-3">Event More Stuff</a>
      </div>
    </div>
  );
};

export default About;
