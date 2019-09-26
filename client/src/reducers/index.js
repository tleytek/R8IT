import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import postReducer from "./postReducer";
import challengeReducer from "./challengeReducer";
import authReducer from "./authReducer";
import { SAVE_SUCCESS } from "../actions/types";

export default combineReducers({
  auth: authReducer,
  post: postReducer,
  challenges: challengeReducer,
  form: formReducer
});
