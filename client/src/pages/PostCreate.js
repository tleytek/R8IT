import React, { useEffect, useState } from "react";
import { Field, reduxForm } from "redux-form";
import { fetchChallenges, createPost } from "../actions";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import PaperContainer from "../components/PaperContainer";
import Select from "../components/Select";
import TextField from "../components/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const renderFileInput = props => {
  const { className, setImagePreview } = props;

  const onChange = e => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    const {
      input: { onChange }
    } = props;
    onChange(e.target.files[0]);
  };

  return (
    <input
      required
      type="file"
      accept=".jpg, .png, .jpeg"
      onChange={onChange}
      className={className}
      {...props.custom}
    />
  );
};

const PostCreate = props => {
  const classes = useStyles();

  const [imagePreview, setImagePreview] = useState();

  useEffect(() => {
    props.fetchChallenges();
  });

  const onSubmit = formValues => {
    props.createPost(formValues);
    setImagePreview(null);
  };

  return (
    <PaperContainer>
      <form onSubmit={props.handleSubmit(onSubmit)}>
        <Typography variant="h6" gutterBottom>
          Create an image competitor!
        </Typography>
        <div>
          <Field
            required
            component={Select}
            data={props.challenges}
            name="challenge"
            className={classes.textField}
          />
        </div>
        <div>
          <Field
            required
            component={TextField}
            id="title"
            name="title"
            label="Title"
            className={classes.textField}
          />
        </div>
        <div>
          <Field
            component={TextField}
            id="description"
            name="description"
            label="Description"
            className={classes.textField}
          />
        </div>
        <div>
          <Field
            name="image"
            type="file"
            component={renderFileInput}
            setImagePreview={setImagePreview}
            className={classes.textField}
          />
        </div>
        <div>
          <img src={imagePreview} className={classes.img} />
        </div>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          className={classes.textField}
        >
          Submit
        </Button>
      </form>
    </PaperContainer>
  );
};

const formWrapped = reduxForm({
  form: "createPost"
})(PostCreate);

const mapStateToProps = state => {
  return {
    challenges: Object.values(state.challenges)
  };
};

export default connect(
  mapStateToProps,
  { fetchChallenges, createPost }
)(formWrapped);

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    margin: theme.spacing(1),
    width: 200
  },
  img: {
    margin: theme.spacing(1),
    borderRadius: "8px",
    minWidth: "50%",
    alignSelf: "center"
  }
}));
