import PublicRoute from './PublicRoute';

import { connect } from 'react-redux';
import { authSelectors } from 'redux/auth';

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(PublicRoute);
