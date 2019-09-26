// import _ from 'lodash';
import { CREATE_CHALLENGE, FETCH_CHALLENGES } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_CHALLENGE:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_CHALLENGES:
      // return { ...state, ..._.mapKeys(action.payload, "_id") };
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
