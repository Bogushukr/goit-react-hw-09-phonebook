import { createAction } from '@reduxjs/toolkit';
import types from './auth-types';

export const registerRequest = createAction(types.REGISTER_REQUEST);
export const registerSuccess = createAction(types.REGISTER_SUCCESS);
export const registerError = createAction(types.REGISTER_ERROR);

export const loginRequest = createAction(types.LOGIN_REQUEST);
export const loginSuccess = createAction(types.LOGIN_SUCCESS);
export const loginError = createAction(types.LOGIN_ERROR);

export const logoutRequest = createAction(types.LOGOUT_REQUEST);
export const logoutSuccess = createAction(types.LOGOUT_SUCCESS);
export const logoutError = createAction(types.LOGOUT_ERROR);

export const getCurrentUserRequest = createAction(types.CHECK_USER_REQUEST);
export const getCurrentUserSuccess = createAction(types.CHECK_USER_SUCCESS);
export const getCurrentUserError = createAction(types.CHECK_USER_ERROR);

const authActions = {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
};
export default authActions;
