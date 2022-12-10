import { COMMENT } from '../constants/actionTypes.js';

export default (state = { matches: [] }, action) => {
  switch (action.type) {
    case COMMENT:
      return {
        ...state,
        matches: state.matches.map((match) => {
          if (match._id === action.payload._id) {
            return action.payload;
          }
          return match;
        }),
      };
    
    default:
      return state;
  }
};
