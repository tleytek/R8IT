import axios from "axios";
import {
  CREATE_CHALLENGE,
  FETCH_CHALLENGES,
  FETCH_USER,
  PREPARE_BATTLE,
  CLEAR_BATTLE,
  FETCH_POSTS
} from "./types";

export const fetchUser = () => async dispatch => {
  const userId = await axios.get("/api/users/id");

  dispatch({ type: FETCH_USER, payload: userId.data });
};

export const createChallenge = formValues => async dispatch => {
  const response = await axios.post("/api/challenges/create", formValues);

  dispatch({ type: CREATE_CHALLENGE, payload: response.data });
};

export const fetchChallenges = () => async dispatch => {
  const response = await axios.get("/api/challenges");

  dispatch({ type: FETCH_CHALLENGES, payload: response.data });
};

export const prepareBattle = () => async dispatch => {
  const response = await axios.get("/api/battle/prepare-battle");

  dispatch({ type: PREPARE_BATTLE, payload: response.data });
};

export const clearBattle = () => async dispatch => {
  dispatch({ type: CLEAR_BATTLE });
};

export const fetchPosts = () => async dispatch => {
  const response = await axios.get("/api/posts/fetchPosts");
  dispatch({ type: FETCH_POSTS, payload: response.data });
};
