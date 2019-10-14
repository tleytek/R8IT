import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    margin: "2em 0px"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    height: "300px",
    width: "300px"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));

export default ({ postData: { title, _id, cloudinaryRef } = {} }) => {
  const classes = useStyles();
  const theme = useTheme();
  console.log(title);
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image={`http://res.cloudinary.com/dw2yg7ney/image/upload/c_fill,fl_awebp,g_center,h_300,q_auto,w_300/${cloudinaryRef}.webp`}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h2" variant="h2">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {_id}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};
