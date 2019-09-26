import React from "react";
import { Field, reduxForm } from "redux-form";
import { createChallenge } from "../actions";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PaperContainer from "../components/PaperContainer";

class ChallengeCreate extends React.Component {
  renderTextField(formProps) {
    return <TextField {...formProps} {...formProps.input} />;
  }

  onSubmit = formValues => {
    this.props.createChallenge(formValues);
  };

  render() {
    return (
      <PaperContainer>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Typography variant="h6" gutterBottom>
            Create a challenge!
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Field
                component={this.renderTextField}
                required
                id="verb"
                name="verb"
                label="Verb"
                fullWidth
                autoComplete="verb"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                required
                component={this.renderTextField}
                id="noun"
                name="noun"
                label="Noun"
                fullWidth
                autoComplete="noun"
              />
            </Grid>
            <Grid item>
              <Button type="submit" color="primary" variant="contained">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </PaperContainer>
    );
  }
}

const formWrapped = reduxForm({
  form: "createChallenge"
})(ChallengeCreate);

export default connect(
  null,
  { createChallenge }
)(formWrapped);
