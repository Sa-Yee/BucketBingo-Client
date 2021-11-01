import {
  GET_BINGO_RANKING
} from '../actions/types';
import {initialState} from './initialState';

const communityReducer = (state = initialState.community, action) => {
  switch (action.type) {
    case GET_BINGO_RANKING:
      return Object.assign({}, state, {
        community: action.payload,
      });
    default:
      return state;
  }
};

export default communityReducer;