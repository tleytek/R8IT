import { FETCH_POSTS } from "../actions/types";

export default (state = {}, action) => {
  const { payload: { competitors, currentChallenge } = {} } = action;

  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, competitors, currentChallenge };
    default:
      return state;
  }
};
