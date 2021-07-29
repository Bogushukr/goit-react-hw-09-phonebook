const types = {
  AUTH_USER: 'auth/user',
  AUTH_TOKEN: 'auth/token',

  REGISTER_REQUEST: 'auth/registerRequest',
  REGISTER_SUCCESS: 'auth/registerSuccess',
  REGISTER_ERROR: 'auth/registerError',

  LOGIN_REQUEST: 'auth/loginRequest',
  LOGIN_SUCCESS: 'auth/loginSuccess',
  LOGIN_ERROR: 'auth/loginError',

  LOGOUT_REQUEST: 'auth/logoutRequest',
  LOGOUT_SUCCESS: 'auth/logoutSuccess',
  LOGOUT_ERROR: 'auth/logoutError',

  CHECK_USER_REQUEST: 'auth/getCurrentUserRequest',
  CHECK_USER_SUCCESS: 'auth/getCurrentUserSuccess',
  CHECK_USER_ERROR: 'auth/getCurrentUserError',
};

export default types;
