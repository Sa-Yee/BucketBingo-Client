import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

axios.defaults.withCredentials = true;

interface Data {
  loginType: string,
  authorizationCode: string,
}

export const userActions = {
  loginUser : createAsyncThunk(
    "user/loginUser",
    async ({ loginType, authorizationCode }:Data) => {
      console.log('in Actions : ', loginType, authorizationCode);
      
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/auth/${loginType}`, { authorizationCode },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
  
      return res.data.accessToken;
  }),
  getUserInfo : createAsyncThunk(
    "user/getUserInfo",
    async (authorizationCode:string) => {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/users`, { 
          headers: { 
            Authorization : `bearer ${authorizationCode}`,
            'Content-Type': 'application/json',
          }
        },
      )

    return res.data;
  }),
  modifyUserInfo : createAsyncThunk(
    "user/modifyUserInfo",
    async (authorizationCode:string) => {
      const res = await axios.patch(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/users`, { authorizationCode },
      )
    console.log('res : ', res);

    return res.data;
  }),
  deleteUser : createAsyncThunk(
    "user/deleteUser",
    async (authorizationCode:string) => {
      const res = await axios.delete(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/users`,
      )
    console.log('res : ', res);

    return res.data;
    //get, delete pramas 어떻게 보내드리면 될까요? 토큰은?
  })
}