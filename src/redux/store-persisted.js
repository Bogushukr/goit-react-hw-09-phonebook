import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import contactsReducer from 'redux/contacts/contacts-reducers';
import authPersistReducer from 'redux/auth/auth-persist';
import middlewares from './middlewares';

export const vault = configureStore({
  reducer: { contacts: contactsReducer, auth: authPersistReducer },
  middleware: middlewares,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(vault);
