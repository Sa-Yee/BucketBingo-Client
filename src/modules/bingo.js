import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

import bingo from '../api/bingo';

const GET_USER_BINGO = 'BINGO/USER_BINGO';
const GET_USER_BINGO_SUCCESS = 'BINGO/GET_USER_BINGO_SUCCESS';
const GET_USER_BINGO_FAILURE = 'BINGO/GET_USER_BINGO_FAILURE';

export const getUserBingo = (data) => ({ type: GET_USER_BINGO, data });

const initialState = {
  bingo: [],
};

export default function bingo(state = initialState, action) {
  switch (action.type) {
    case GET_RANKING:
      return {
        ...state,
        loading: true,
      };
    case GET_RANKING_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case GET_RANKING_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}