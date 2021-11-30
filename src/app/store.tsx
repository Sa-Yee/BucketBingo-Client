import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../features/user/user';
import rankingReducer from '../features/ranking/ranking';
import bingoReducer from '../features/bingo/bingo';

export const store = configureStore({
  reducer: {
    user : userReducer,
    ranking : rankingReducer,
    bingo : bingoReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch