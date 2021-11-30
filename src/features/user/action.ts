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
      
      console.log('res : ', res);
  
      return res.data;
  }),
}