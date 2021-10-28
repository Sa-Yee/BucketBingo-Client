import {
  GET_BINGO_RANKING
} from './types';
import axios from 'axios';

axios.defaults.withCredentials = true;
//process.env.SERVER_ENDPOINT;

export function getBingoRanking() {
  const response = axios
    .get(`${process.env.SERVER_ENDPOINT}/post`, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((res) => {
      return res.data.postList;
    });

  return {
    type: GET_BINGO_RANKING,
    payload: response,
  };
}