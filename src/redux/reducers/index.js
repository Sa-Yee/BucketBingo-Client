import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from '../reducers/userReducer';
import mypegeReducer from '../reducers/mypageReducer';
import bingoReducer from '../reducers/bingoReducer';
import communityReducer from '../reducers/communityReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  user:userReducer,
  mypege:mypegeReducer,
  bingo:bingoReducer,
  community:communityReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;

export type RootState = ReturnType<typeof rootReducer>;