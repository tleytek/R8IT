import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";
import Container from "@material-ui/core/Container";
import HorizontalCard from "../components/HorizontalCard";
class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  // handleClick = e => {
  //   axios
  //     .get("/api/getPost" + e.target.getAttribute("data-id"))
  //     .then(response => {
  //       this.setState({ posts: response.data });
  //     });
  // };

  // handlePeriodChange = e => {
  //   this.setState({ period: e.target.textContent });
  //   axios.get("/api/getPosts/" + e.target.textContent).then(response => {
  //     this.setState({ posts: response.data });
  //   });
  // };

  renderPostList = posts => {
    return posts.map(post => <HorizontalCard key={post._id} postData={post} />);
  };

  render() {
    return <Container>{this.renderPostList(this.props.posts)}</Container>;
  }
}

const mapStateToProps = state => {
  return {
    posts: Object.values(state.posts)
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
