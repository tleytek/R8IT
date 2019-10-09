import { PREPARE_BATTLE, CLEAR_BATTLE } from "../actions/types";

const INITIAL_STATE = {
  competitors: [],
  currentChallenge: { verb: "", noun: "" }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PREPARE_BATTLE:
      return {
        ...state,
        competitors: action.payload.competitors,
        currentChallenge: action.payload.currentChallenge
      };
    case CLEAR_BATTLE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
