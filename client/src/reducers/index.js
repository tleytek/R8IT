import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import battleReducer from "./battleReducer";
import challengeReducer from "./challengeReducer";
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  battle: battleReducer,
  challenges: challengeReducer,
  form: formReducer
});
