import {
  PUT_BINGO_POST,
  GET_BINGO_POST
} from './types';
import axios from 'axios';

axios.defaults.withCredentials = true;
//process.env.SERVER_ENDPOINT;

export function putBingoPost() {
  const response = axios
    .put(`${process.env.SERVER_ENDPOINT}/post`, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((res) => {
      return res.data.postList;
    });

  return {
    type: PUT_BINGO_POST,
    payload: response,
  };
}

export function getBingoPost() {
  const response = axios
    .get(`${process.env.SERVER_ENDPOINT}/post`, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((res) => {
      return res.data.postList;
    });

  return {
    type: GET_BINGO_POST,
    payload: response,
  };
}