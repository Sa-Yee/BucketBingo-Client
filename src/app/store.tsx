import { configureStore } from '@reduxjs/toolkit';

import storageSession from 'redux-persist/lib/storage/session';
import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist";

import userReducer from '../features/user/user';
import rankingReducer from '../features/ranking/ranking';
import bingoReducer from '../features/bingo/bingo';

const persistConfig = {
  key: "root",
  storage : storageSession,
  whitelist: ['user'],
};

const reducers = combineReducers({
  user : userReducer,
  ranking : rankingReducer,
  bingo : bingoReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
