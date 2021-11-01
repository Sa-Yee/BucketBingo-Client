import {
  MYPAGE_USER_INFO,
  MODIFY_USER_INFO,
  GET_MY_BINGO,
  DELETE_USER_INFO,
} from '../actions/types';
import {initialState} from './initialState';

const mypageReducer = (state = initialState.userInfo, action) => {
  switch (action.type) {
    case MYPAGE_USER_INFO:
      return Object.assign({}, state, {
        userInfo: action.payload,
      });
    case MODIFY_USER_INFO:
      return Object.assign({}, state, {
        userInfo: [...state.userInfo, ...action.payload],
      });
    case GET_MY_BINGO:
      return Object.assign({}, state, {
        userInfo: action.payload,
      });
    case DELETE_USER_INFO:
      return Object.assign({});
    default:
      return state;
  }
};

export default mypageReducer;