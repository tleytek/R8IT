import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import challengeReducer from "./challengeReducer";
import userReducer from "./userReducer";
import battleReducer from "./battleReducer";
import postsReducer from "./postsReducer";

export default combineReducers({
  user: userReducer,
  battle: battleReducer,
  challenges: challengeReducer,
  posts: postsReducer,
  form: formReducer
});
