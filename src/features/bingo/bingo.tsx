import { createSlice } from '@reduxjs/toolkit';
import { bingoActions } from './action';

interface User {
  id:number;
  title:string;
  score:number;
}

export interface bingoState {
  loading : boolean,
  bingo : [
    {
      year:number;
      userId:number;
      bucketList:Array<User>
    },
  ] | [];
}

const initialState: bingoState = {
  loading : false,
  bingo : [],
};

export const bingoSlice = createSlice({
  name: 'ranking',
  initialState,
  reducers: {
   },
  extraReducers: (builder) => {
    builder.addCase(bingoActions.getBingos.pending, (state, action) => {
      state.loading = true;
    })
    builder.addCase(bingoActions.getBingos.fulfilled, (state, action) => {
      state.loading = false;
      state.bingo = action.payload;
    })
  },
});

export default bingoSlice.reducer;