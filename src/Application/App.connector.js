import { connect } from 'react-redux';

import Application from './App';

import { authOperations } from 'redux/auth';

const mapDispatchToProps = {
  getCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(Application);
