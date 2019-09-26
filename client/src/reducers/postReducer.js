import { CREATE_POST } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_POST:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
