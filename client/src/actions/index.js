import axios from "axios";
import {
  CREATE_CHALLENGE,
  FETCH_CHALLENGES,
  FETCH_USER,
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

export const createPost = async ({ challenge, title, description, image }) => {
  let formData = new FormData();
  formData.append("challengeId", challenge);
  formData.append("title", title);
  formData.append("description", description ? description : "");
  formData.append("image", image);
  const config = {
    headers: { "content-type": "multipart/form-data" }
  };

  const response = await axios.post("/api/posts/create", formData, config);
};

export const fetchPosts = quantity => async dispatch => {
  const response = await axios.get(`/api/posts/random/${quantity}`);
  dispatch({ type: FETCH_POSTS, payload: response.data });
};
