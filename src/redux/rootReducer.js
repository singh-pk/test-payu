import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

import courseReducer from './courseReducer';

const persistConfig = {
  key: 'root',
  storage: storageSession,
  whitelist: ['course'],
};

const rootReducer = combineReducers({ course: courseReducer });

export default persistReducer(persistConfig, rootReducer);
