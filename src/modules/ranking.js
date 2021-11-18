import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

import ranking from '../api/ranking';

const GET_RANKING = 'RANKING/GET_RANKING';
const GET_RANKING_SUCCESS = 'RANKING/GET_RANKING_SUCCESS';
const GET_RANKING_FAILURE = 'RANKING/GET_RANKING_FAILURE';

export const getRanking = (data) => ({ type: GET_RANKING, data });

function* getRankingSaga(action) {
  try {
    yield put({ type: GET_RANKING });
    delay(2000)
    yield put({ type: GET_RANKING_SUCCESS, data: res });
  } catch (e) {
    console.log(e);
  }
}

export function* rankingSaga() {
  yield takeEvery(GET_RANKING, getRankingSaga);
}

const initialState = {
  ranking: [],
  loading: false,
};

export default function ranking(state = initialState, action) {
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