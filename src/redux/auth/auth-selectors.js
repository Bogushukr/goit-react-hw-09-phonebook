const getIsLogged = state => state.auth.isLogin;
const getUserName = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;

const selectors = {
  getIsLogged,
  getUserName,
  getUserEmail,
};
export default selectors;