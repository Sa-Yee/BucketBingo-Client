import { createSlice } from '@reduxjs/toolkit';
import { userActions } from './action';

export interface UserState {
  loading : boolean,
  token : string,
  user : null | {
    createdAt: string,
    email: string,
    id: string,
    image: string,
    language: string,
    lastLoginAt: string,
    name: string,
    phone: string | null,
    updatedAt: string,
  }
}

const initialState: UserState = {
  loading : false,
  token : '',
  user : null
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
      state.token = action.payload;
    })
    builder.addCase(userActions.logoutUser.fulfilled, (state, action) => {
      state.loading = false;
      state.token = ''
      state.user = null
    })
    builder.addCase(userActions.getUserInfo.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    })
    builder.addCase(userActions.modifyUserInfo.pending, (state, action) => {
      state.loading = true;
    })
    builder.addCase(userActions.modifyUserInfo.fulfilled, (state, action) => {
      state.loading = false;
    })
  },
});

export default userSlice.reducer;