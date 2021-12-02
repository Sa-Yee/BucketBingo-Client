import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

axios.defaults.withCredentials = true;

interface Data {
  loginType: string,
  authorizationCode: string,
}

export const rankingActions = {
  getRanking : createAsyncThunk(
    "ranking/getRanking",
    async () => {    
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/ranking`,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      
      console.log('res : ', res);
  
      return res.data;
  }),
}