// import { createSelector } from 'reselect';

const getIsAuthenticated = state => state.auth.isLogin;
const getUserName = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;

const selectors = {
  getIsAuthenticated,
  getUserName,
  getUserEmail,
};
export default selectors;
