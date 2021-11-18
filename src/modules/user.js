import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

import user from '../api/user';

const KAKAO_LOGIN = 'USER/KAKAO_LOGIN';
const GOOGLE_LOGIN = 'USER/GOOGLE_LOGIN';
const NAVER_LOGIN = 'USER/NAVER_LOGIN';
const LOGIN_SUCCESS = 'USER/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'USER/LOGIN_FAILURE';

const USER_LOGOUT = 'USER/USER_LOGOUT';
const USER_LOGOUT_SUCCESS = 'USER/USER_LOGOUT_SUCCESS';
const USER_LOGOUT_FAILURE = 'USER/USER_LOGOUT_FAILURE';

const GET_USERINFO = 'USER/GET_USERINFO';
const GET_USERINFO_SUCCESS = 'USER/GET_USERINFO_SUCCESS';
const GET_USERINFO_FAILURE = 'USER/GET_USERINFO_FAILURE';

const DELETE_USER = 'USER/DELETE_USER';
const DELETE_USER_SUCCESS = 'USER/DELETE_USER_SUCCESS';
const DELETE_USER_FAILURE = 'USER/DELETE_USER_FAILURE';

export const kakaoLogin = (data) => ({ type: KAKAO_LOGIN, data });
export const googloLogin = (data) => ({ type: GOOGLE_LOGIN, data });
export const naverLogin = (data) => ({ type: NAVER_LOGIN, data });

export const userLogout = (data) => ({ type: USER_LOGOUT, data });

export const getUserInfo = (data) => ({ type: GET_USERINFO, data });

export const deleteUser = (data) => ({ type: DELETE_USER, data });

const initialState = {
  accessToken: '',
  userInfo: {},
};