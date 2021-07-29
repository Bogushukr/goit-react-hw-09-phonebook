import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from 'redux/contacts/contacts-reducers';
import authReducer from 'redux/auth/auth-reducers';
import middlewares from './middlewares';

export const vault = configureStore({
  reducer: { contacts: contactsReducer, auth: authReducer },
  middleware: middlewares,
  devTools: process.env.NODE_ENV === 'development',
});
