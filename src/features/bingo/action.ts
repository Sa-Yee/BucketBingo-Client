import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

axios.defaults.withCredentials = true;

export const bingoActions = {
  addBingo : createAsyncThunk(
    "bingo/addBingo",
    async (authorizationCode:string) => {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/bingos`, { authorizationCode },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      
      console.log('res : ', res);
  
      return res.data;
  }),
  getBingos : createAsyncThunk(
    "bingo/getBingos",
    async (authorizationCode:string) => {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/bingos`,
        { headers: { 
          Authorization : `bearer ${authorizationCode}`,
          'Content-Type': 'application/json',
          }
        }
      );
  
      return res.data;
  }),
  getBuckets : createAsyncThunk(
    "bingo/getBuckets",
    async (authorizationCode:string) => {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/buckets`,
      );
      
      console.log('res : ', res);
  
      return res.data;
  }),
  editBuckets : createAsyncThunk(
    "bingo/editBuckets",
    async (authorizationCode:string) => {
      const res = await axios.patch(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/buckets`,
      );
      
      console.log('res : ', res);
  
      return res.data;
  }),
  deleteBingo : createAsyncThunk(
    "bingo/deleteBingo",
    async (authorizationCode:string) => {
      const res = await axios.delete(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/bingo`,
      );
      
      console.log('res : ', res);
  
      return res.data;
  }),
}