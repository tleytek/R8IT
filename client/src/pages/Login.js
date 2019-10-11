import React from "react";
import { connect } from "react-redux";
import PaperContainer from "../components/PaperContainer";

const Login = () => {
  return (
    <PaperContainer>
      <h1>You are not Logged in</h1>
    </PaperContainer>
  );
};

export default connect()(Login);
