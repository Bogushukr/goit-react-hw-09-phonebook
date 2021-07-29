import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from 'redux/auth/auth-reducers';

const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
  blacklist: [''],
};

export default persistReducer(persistAuthConfig, authReducer);
