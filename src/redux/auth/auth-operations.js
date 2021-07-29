import axios from 'api/axios-instance';

import {
  logoutSuccess,
  logoutRequest,
  logoutError,
  registerSuccess,
  registerRequest,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from 'redux/auth/auth-actions';

const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

const logIn = credentials => async dispatch => {
  try {
    dispatch(loginRequest());
    const response = await axios.post(
      '/users/login',
      JSON.stringify(credentials),
    );
    token.set(response.data.token);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

const logOut = () => async dispatch => {
  try {
    dispatch(logoutRequest());
    await axios.post('/users/logout');
    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

const register = credentials => async dispatch => {
  try {
    dispatch(registerRequest());
    const response = await axios.post(
      `/users/signup`,
      JSON.stringify(credentials),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    token.set(response.data.token);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);

  try {
    dispatch(getCurrentUserRequest());
    const response = await axios.get('/users/current');
    dispatch(getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};

const contactsOperations = {
  logIn,
  logOut,
  register,
  getCurrentUser,
};
export default contactsOperations;
