import { connect } from 'react-redux';

import { authOperations } from 'redux/auth';

import LoginView from './LoginView';

const mapDispatchToProps = dispatch => ({
  logIn: credentials => dispatch(authOperations.logIn(credentials)),
});

export default connect(null, mapDispatchToProps)(LoginView);
