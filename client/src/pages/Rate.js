import React, { Component } from "react";
import { connect } from "react-redux";
import PaperContainer from "../components/PaperContainer";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";
import { prepareBattle, clearBattle } from "../actions";
import { saveResult } from "../API";

class Rate extends Component {
  componentDidMount() {
    this.props.prepareBattle();
  }

  componentWillUnmount() {
    this.props.clearBattle();
  }

  onClick = async ({ target: { id: winnerId } }) => {
    const { competitors, prepareBattle } = this.props;
    const results = competitors.map((competitor, index) => {
      if (String(index) !== winnerId) {
        competitor.rank = 2;
      } else {
        competitor.rank = 1;
      }
      return competitor;
    });

    const response = await saveResult(results);
    response.status === 200 ? prepareBattle() : console.log("bad response");
  };

  renderCompetitors = () => {
    const { competitors } = this.props;
    return competitors.map(({ _id, cloudinaryUrl, title }, index) => {
      return (
        <img
          key={_id}
          src={cloudinaryUrl}
          alt={title}
          id={`${index}`}
          onClick={this.onClick}
        />
      );
    });
  };

  render() {
    const { competitors, currentChallenge } = this.props;
    return (
      <PaperContainer>
        <Typography variant="h2" gutterBottom align="center">
          {currentChallenge ? (
            `${currentChallenge.verb} ${currentChallenge.noun}?`
          ) : (
            <Skeleton />
          )}
        </Typography>
        <Grid container justify="space-between" alignItems="center">
          {competitors.length === 0 ? (
            <React.Fragment>
              <Skeleton variant="rect" width={400} height={400} />
              <Skeleton variant="rect" width={400} height={400} />
            </React.Fragment>
          ) : (
            this.renderCompetitors(competitors)
          )}
        </Grid>
      </PaperContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    competitors: Object.values(state.battle.competitors),
    currentChallenge: state.battle.currentChallenge
  };
};

export default connect(
  mapStateToProps,
  { prepareBattle, clearBattle }
)(Rate);
