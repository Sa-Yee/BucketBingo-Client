import { createSlice } from '@reduxjs/toolkit';
import { rankingActions } from './action';

export interface rankingState {
  loading : boolean,
  ranking : [
    {
      id: number,
      userId: string,
      time: string,
    },
  ] | [];
}

const initialState: rankingState = {
  loading : false,
  ranking : [],
};

export const rankingSlice = createSlice({
  name: 'ranking',
  initialState,
  reducers: {
   },
  extraReducers: (builder) => {
    builder.addCase(rankingActions.getRanking.pending, (state, action) => {
      state.loading = true;
    })
    builder.addCase(rankingActions.getRanking.fulfilled, (state, action) => {
      state.loading = false;
      state.ranking = action.payload;
    })
  },
});

export default rankingSlice.reducer;