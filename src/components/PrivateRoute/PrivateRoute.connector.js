import PrivateRoute from './PrivateRoute';

import { connect } from 'react-redux';
import { authSelectors } from 'redux/auth';

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(PrivateRoute);
