import {
  KAKAO_SIGNIN_USER,
  GOOGLE_SIGNIN_USER,
  NAVER_SIGNIN_USER,
  SIGNOUT_USER,
} from './types';
import axios from 'axios';

axios.defaults.withCredentials = true;
//process.env.SERVER_ENDPOINT;

interface Data {
  authorizationCode: string;
  accessToken?:string;
}

//1.카카오 로그인
export function kakaoLoginUser(data:Data) {
  const response = axios
    .post(
      `${process.env.SERVER_ENDPOINT}/auth/kakao`,
      `${data.authorizationCode}`,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )
    .then((res) => {
      const { id, email, image, name, authorityId, loginType } =
        res.data.userInfo;
      return {
        message: res.data.message,
        accessToken: res.data.accessToken,
        id: id,
        email: email,
        image: image,
        name: name,
        phone: null,
        authority: authorityId,
        loginType: loginType,
      };
    });

  return {
    type: KAKAO_SIGNIN_USER,
    payload: response,
  };
}

//2.구글 로그인
export function googleLoginUser(data:Data) {
  const response = axios
    .post(
      `${process.env.SERVER_ENDPOINT}/auth/google`,
      `${data.authorizationCode}`,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )
    .then((res) => {
      const { id, email, image, name, authorityId, loginType } =
        res.data.userInfo;
      return {
        message: res.data.message,
        accessToken: res.data.accessToken,
        id: id,
        email: email,
        image: image,
        name: name,
        phone: null,
        authority: authorityId,
        loginType: loginType,
      };
    });

  return {
    type: GOOGLE_SIGNIN_USER,
    payload: response,
  };
}

//3..네이버 로그인
export function naverLoginUser(data:Data) {
  const response = axios
    .post(
      `${process.env.SERVER_ENDPOINT}/auth/naver`,
      `${data.authorizationCode}`,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )
    .then((res) => {
      const { id, email, image, name, authorityId, loginType } =
        res.data.userInfo;
      return {
        message: res.data.message,
        accessToken: res.data.accessToken,
        id: id,
        email: email,
        image: image,
        name: name,
        phone: null,
        authority: authorityId,
        loginType: loginType,
      };
    });

  return {
    type: NAVER_SIGNIN_USER,
    payload: response,
  };
}

//4.로그아웃
export async function signoutUser(data:Data) {
  const response = axios.get(`${process.env.SERVER_ENDPOINT}/auth/logout`, {
    headers: {
      Authorization: `bearer ${data.accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  return {
    type: SIGNOUT_USER,
    payload: {},
  };
}
