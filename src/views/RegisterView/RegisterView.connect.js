import { connect } from 'react-redux';

import { authOperations } from 'redux/auth';

import RegisterView from './RegisterView';

const mapDispatchToProps = dispatch => ({
  register: credentials => dispatch(authOperations.register(credentials)),
});

export default connect(null, mapDispatchToProps)(RegisterView);
