import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

axios.defaults.withCredentials = true;

interface LoginData {
  loginType: string,
  authorizationCode: string,
}

interface ModifyData {
  id : string,
  authorizationCode: string,
  name ?: string,
  phone ?: string,
}

export const userActions = {
  loginUser : createAsyncThunk(
    "user/loginUser",
    async ({ loginType, authorizationCode }:LoginData) => {
      console.log('in Actions : ', loginType, authorizationCode);
      
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/auth/${loginType}`, { authorizationCode },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
  
      return res.data.accessToken;
  }),
  logoutUser : createAsyncThunk(
    "user/logoutUser",
    () => {
      return 'logout'
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
    async ({id, authorizationCode, name, phone}:ModifyData) => {
      const res = await axios.patch(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/users/${id}`, { name, phone },
        { headers: { 
          Authorization : `bearer ${authorizationCode}`,
          'Content-Type': 'application/json',
          }
        }
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
  })
}