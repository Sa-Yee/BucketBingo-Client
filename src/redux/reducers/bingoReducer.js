import {
  PUT_BINGO_POST,
  GET_BINGO_POST
} from '../actions/types';
import {initialState} from './initialState';

const bingoReducer = (state = initialState.bingo, action) => {
  switch (action.type) {
    case PUT_BINGO_POST:
      return Object.assign({}, state, {
        bingo: action.payload,
      });
    case GET_BINGO_POST:
      return Object.assign({}, state, {
        bingo: action.payload,
      });
    default:
      return state;
  }
};

export default bingoReducer;