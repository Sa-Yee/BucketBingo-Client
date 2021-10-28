import {
  MYPAGE_USER_INFO,
  MODIFY_USER_INFO,
  GET_MY_BINGO,
  DELETE_USER_INFO,
} from './types';
import axios from 'axios';

// axios.defaults.withCredentials = true;
//process.env.SERVER_ENDPOINT;

interface Data {
  accessToken : string;
  nickname?:string;
}

//1. 유저 정보 가져오기
export const getMypageInfo = async (data:Data) => {
  const response = axios
    .get(`${process.env.SERVER_ENDPOINT}/user/active`, {
      headers: {
        Authorization: `bearer ${data.accessToken}`,
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      return res.data;
    });

  return {
    type: MYPAGE_USER_INFO,
    payload: response,
  };
};


//2. 유저 정보 수정하기
export function modifyUserInfo(data:Data) {
  const response = axios
    .patch(
      `${process.env.SERVER_ENDPOINT}/user`,
      { name: data.nickname },
      {
        headers: { Authorization: `bearer ${data.accessToken}` },
        withCredentials: true,
      }
    )
    .then((res) => {
      return res.data;
    });

  return {
    type: MODIFY_USER_INFO,
    payload: response,
  };
}

//3. 유지 빙고 가져오기
export function getBingoPost() {
  const response = axios
    .get(`${process.env.SERVER_ENDPOINT}/post`, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((res) => {
      return res.data.postList;
    });

  return {
    type: GET_MY_BINGO,
    payload: response,
  };
}

//4.회원탈퇴
export async function deleteUser(data:Data) {
  const response = axios
    .delete(`${process.env.SERVER_ENDPOINT}/user`, {
      headers: {
        Authorization: `bearer ${data.accessToken}`,
      },
      withCredentials: true,
    })
    .then((res) => {
      return res.data;
    });

  return {
    type: DELETE_USER_INFO,
    payload: {},
  };
}