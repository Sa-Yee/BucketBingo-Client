import {
  KAKAO_SIGNIN_USER,
  GOOGLE_SIGNIN_USER,
  NAVER_SIGNIN_USER,
  SIGNOUT_USER,
} from '../actions/types';
import {initialState} from './initialState';

// interface User {
//   id: number;
//   name: string;
//   phone?: string;
//   email: string;
//   image?: string;
//   loginType: string;
//   createdAt: string;
//   updatedAt: string;
// };

const userReducer = (state = initialState.User, action) => {
  switch (action.type) {
    case KAKAO_SIGNIN_USER:
      return Object.assign({}, state, {
        userInfo: action.payload,
      });
    case GOOGLE_SIGNIN_USER:
      return Object.assign({}, state, {
        userInfo: action.payload,
      });
    case NAVER_SIGNIN_USER:
      return Object.assign({}, state, {
        userInfo: action.payload,
      });
    case SIGNOUT_USER:
      return Object.assign({});
    default:
      return state;
  }
};

export default userReducer;
