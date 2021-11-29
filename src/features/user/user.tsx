import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { userActions } from './action';

import axios from "axios";

axios.defaults.withCredentials = true;

export interface UserState {
  loading : boolean,
  user : [] | [{
    loginType: string,
    email: string,
    nickname: string,
    phone: string,
    birth: number,
  }]
}

const initialState: UserState = {
  loading : false,
  user : []
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   },
  extraReducers: (builder) => {
    builder.addCase(userActions.loginUser.pending, (state, action) => {
      state.loading = true;
    })
    builder.addCase(userActions.loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    })
  },
});

// Action creators are generated for each case reducer function
// export const { login, logout, modifyUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;